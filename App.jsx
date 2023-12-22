import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Select from './src/Select';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Common from "./src/NumbersGame/Common";
import Rank from "./src/NumbersGame/Rank/Rank";
import Easy from "./src/NumbersGame/Levels/Easy";
import Normal from "./src/NumbersGame/Levels/Normal";
import Hard from "./src/NumbersGame/Levels/Hard";
import Check from "./src/NumbersGame/CheckRank/Check";
import CheckRank from "./src/NumbersGame/CheckRank/CheckRank";

const Stack = createStackNavigator();

function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GameMode">
        <Stack.Screen name="GameMode" component={GameMode}/>
        <Stack.Screen name="Select" component={Select}/>
        <Stack.Screen name="Common" component={Common}/>
        <Stack.Screen name="Rank" component={Rank}/>
        <Stack.Screen name="Easy" component={Easy}/>
        <Stack.Screen name="Normal" component={Normal}/>
        <Stack.Screen name="Hard" component={Hard}/>
        <Stack.Screen name="Check" component={Check}/>
        <Stack.Screen name="CheckRank" component={CheckRank}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function GameMode({navigation}){
  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("Select")}>
        <Text style={{
          color: "#89a5ea"
        }}>
        {"순서찾기"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#ffffff"
  },
  buttons: {
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: '#89a5ea'
  }
});
export default App;