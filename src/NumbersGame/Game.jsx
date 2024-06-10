import { useState, useEffect } from "react";
import { Button, Image, Pressable, Text, View, PixelRatio, Alert, TouchableOpacity, StyleSheet} from "react-native";
import Reset from '../Image/Reset.png';
import DialogInput from 'react-native-dialog-input';

function Game(props){
    const [name, setName] = useState("");
    const [Stage, setStage] = useState(0);
    const [Start, setStart] = useState(false);
    const [end, setEnd] = useState(false);
    const [game, setGame] = useState(false);
    const [Numbers, setNumbers] = useState();
    const [Numberc, setNumberc] = useState(0);
    const [Random_boxs, setRandom_boxs] = useState();
    const [min, setMin] = useState(1);
    const [sec, setSec] = useState(0);
    const [running_Min, setRunning_Min] = useState(0);
    const [running_Sec, setRunning_Sec] = useState(0);
    const [Timer, setTimer] = useState(false);
    const [Clearmin, setClearmin] = useState(0);
    const [Clearsec, setClearsec] = useState(0);
    const [before_delay,  setBefore_delay] = useState(0);

    const delay_level = (level, stage) =>{
        let time = 0;
        switch(level){
            case "Easy":
                time = 10000 * Math.pow(stage, 2);
                break;
            case "Normal":
                time = 5000 * Math.pow(stage, 2);
                break;
            case "Hard":
                time = 2500 * Math.pow(stage, 2);
                break;
            default:
                return 0;
        }
        setDelay(time - before_delay);
        setBefore_delay(time * 0.01);
    };

    const [delay, setDelay] = useState(0);

    const Random_Number = (max) =>{
        return Math.floor(Math.random() * (max - 1) + 1);
    };
    const box_choice = (n) =>{
        let boxs = Array.from(Array(n), ()=> Array(n).fill(0));
        let boxs_check = [];
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                let num = Random_Number(Math.pow(n, 2) + 1);
                if(boxs_check.find((n) => n === num) === undefined){
                    boxs[i][j] = num;
                    boxs_check.push(num);
                }else{
                    j--;
                }
            }
        }
        return boxs;
    };

    const box_reset = (n) =>{
        return Array.from(Array(n), ()=> Array(n).fill(0));
    }

    const fs = (size) =>{
        return size / PixelRatio.getFontScale();
    }

    useEffect(() =>{
        if(props.rank === 'true'){
            if(min === 0 && sec === 0){
                setTimer(false);
                setEnd(true);
            }else if(sec === -1){
                setSec(59);
                setMin(min - 1);
            }else if(running_Sec === 60){
                setRunning_Min(min + 1);
                setRunning_Sec(0);
            }else if(Timer){
                const counting = setTimeout(() =>{
                    setSec(sec - 1);
                    setRunning_Sec(running_Sec + 1);
                }, 1000);
    
                return () => clearTimeout(counting);
            }
        }
    }, [sec, Timer, running_Sec]);

    useEffect(() =>{
        if(props.rank === 'true'){
            if(JSON.stringify(Random_boxs) === JSON.stringify(Numbers)) setTimer(false);
            else setTimer(true);
        }
    }, [Numbers]);

    useEffect(() =>{
        delay_level(props.level, 2);
    }, [])

    return(
        <>
            {    props.rank === 'true'&&
                <>
                    <Text>
                        {`남은 시간: ${min} : ${sec}`}
                    </Text>
                    <DialogInput
                        isDialogVisible={name === "" ? true : false}
                        message={"랭크에 등록될 이름을 입력해주세요."}
                        hintInput={"예시) 기억왕, 장인, MemoryKing"}
                        initValueTextInput={""}
                        submitText={'시작'}
                        cancelText={'돌아가기'}
                        textInputProps={{
                            keyboardType:"default"
                        }}
                        submitInput={(input)=>{
                            setName(input);
                        }}
                        closeDialog={() =>{
                            props.navigation.navigate("Rank");
                        }}
                    />
            </>
            }
            {   !Start && !end &&
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={()=>{
                        setStage(Stage + 1);
                        let nb = box_choice(Stage + 2);
                        setNumbers([...nb]);
                        setRandom_boxs([...nb]);
                        setStart(true);
                        setTimeout(() => {
                            setNumbers(box_reset(Stage + 2));
                            setGame(true);
                            setTimer(true);
                        }, delay);
                    }}>
                    <Text style={{color: "#00498c"}}>
                        {`Stage ${Stage + 1}`}
                    </Text>
                </TouchableOpacity>
            }

            {
                Start && !end &&
                (
                    <>
                        {
                            Numbers.map((n, i) => {
                                return(
                                    <View
                                    style={{
                                        flexDirection: 'row'
                                    }} key={i}>
                                        {
                                            n.map((m, j) =>{
                                                return(
                                                    <TouchableOpacity
                                                        style={styles.games}
                                                        key={j}
                                                        onPress={()=>{
                                                            if(m === 0){
                                                                Numbers[i][j] = Numberc;
                                                                setNumbers([...Numbers]);
                                                                setNumberc(Numberc + 1);
                                                            }
                                                        }}>
                                                        <Text>{m === 0 ? "?" : `${m}`}</Text>
                                                    </TouchableOpacity>
                                                );
                                            })
                                        }
                                    </View>
                                );
                            })
                        }
                        <>
                            {
                                JSON.stringify(Random_boxs) !== JSON.stringify(Numbers) &&
                                <Text
                                    onPress={()=>{
                                        setNumbers(box_reset(Stage + 1));
                                        setNumberc(1);
                                    }}
                                    style={{fontSize: 35}}
                                >&#8634;
                                </Text>
                            }
                            {   
                                game && JSON.stringify(Random_boxs) === JSON.stringify(Numbers) &&
                                <Text
                                style={{
                                    fontSize: 35
                                }}
                                onPress={()=>{
                                    setStart(false);
                                    setGame(false);
                                    setNumberc(1);
                                    setClearmin(running_Min);
                                    setClearsec(running_Sec);
                                    delay_level(props.level, Stage + 2);
                                }}
                                >&gt;</Text>
                            }
                        </>
                    </>
                )
            }

            {
                end &&
                <>
                    <Text>{`Stage ${Stage - 1} Clear`}</Text>
                    <Text>{`${Clearmin}:${Clearsec}`}</Text>
                    <Button
                        color={"red"}
                        title="종료"
                        onPress={()=>{
                            fetch("https://seungwoo.i234.me/creatRank.php", {
                                method: "POST",
                                body: JSON.stringify({
                                    Id: name,
                                    Stage: Stage - 1,
                                    Rank: props.level,
                                    ClearTime: `00:${Clearmin}:${Clearsec}`
                                })
                            }).then(res => res.json())
                            .then(res =>{
                                if(res == "insert success"){
                                    props.navigation.navigate("GameMode");
                                }else{
                                    Alert.alert("등록 실패");
                                }
                            })
                        }}/>
                </>
            }
        </>
    );
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: "#fff",
        padding: 10,
        borderWidth: 2,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: "#00498c",
        marginTop: 10
    },
    games: {
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderStyle: 'solid',
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Game;
