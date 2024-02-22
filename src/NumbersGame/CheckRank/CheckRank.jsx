import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

function CheckRank({navigation, route}){
    const [RankList, setRankList] = useState([]);
    useEffect(() => {
        fetch("https://seungwoo.i234.me/loadRank.php", {
            method: "POST",
            body: JSON.stringify({
                Rank: route.params.Rank
            })
        }).then(res => res.json())
        .then(res => {
            let list = [];
            for(var i = 0; i < res.length; i++){
                list.push([i + 1, res[i]["Id"], res[i]["Stage"], res[i]["ClearTime"]]);
            }
            setRankList(list);
        });
    }, []);

    return(
        <View style={styles.container}>
            <Text>{`${route.params.Rank} 모드 순위표`}</Text>
            <Table  borderStyle={{borderWidth: 4, borderColor: "#c8e1ff"}}>
                <Row data={["순위", "이름", "Stage", "소요 시간"]} style={styles.head} textStyle={styles.text}/>
                <Rows data={RankList} style={styles.row} textStyle={styles.text}/>
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
  head: { width: "80%", backgroundColor: '#f1f8ff' },
  row: { width: "100%", backgroundColor:  "#fff"},
  text: { margin: 6 }
});

export default CheckRank;
