import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function Main ({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text1}>{navigation.getParent()}</Text>
            <Button
                style={styles.buttons}
                title="Easy"
                color={"#777777"}
                onPress={() =>{navigation.navigate("Easy")}}/>
            <Button
                title="Normal"
                color={"#777777"}
                onPress={() =>{navigation.navigate("Normal")}}/>

            <Button
                title="Hard"
                color={"#777777"}
                onPress={() =>{navigation.navigate("Hard")}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text1: {
        fontSize: 30
    },

    buttons: {
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#1E6738',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    }
});

export default Main;