import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Game from "../Game";

function Normal({navigation, route}){
    return(
        <View style={styles.container}>
            <Game level={route.params.level} rank={route.params.rank} navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff"
    }
});

export default Normal;