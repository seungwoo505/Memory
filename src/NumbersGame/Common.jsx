import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Common ({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text1}>{navigation.getParent()}</Text>
            <TouchableOpacity
                style={styles.easy}
                onPress={() =>{navigation.navigate("Easy", {level : "Easy", rank : "false"})}}>
                <Text style={{color: "#777777"}}>{"Easy"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.normal}
                onPress={() =>{navigation.navigate("Normal", {level : "Normal", rank : "false"})}}>
                <Text style={{color: "#79edff"}}>{"Normal"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.hard}
                onPress={() =>{navigation.navigate("Hard", {level : "Hard", rank : "false"})}}>
                <Text style={{color: "#e94b48"}}>{"Hard"}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },

    text1: {
        fontSize: 30
    },

    easy: {
        backgroundColor: "#fff",
        padding: 10,
        borderWidth: 2,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: "#777777",
        marginBottom: 10
    },

    normal: {
        backgroundColor: "#fff",
        padding: 10,
        borderWidth: 2,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: "#79edff",
        marginBottom: 10
    },

    hard: {
        backgroundColor: "#fff",
        padding: 10,
        borderWidth: 2,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: "#e94b48"
    }
});
export default Common;