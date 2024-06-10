import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Select({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttons}
                onPress={() => navigation.navigate("Common")}>
                <Text style={{color: "#003458"}}>
                    {"일반"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttons}
                onPress={() => navigation.navigate("Rank")}>
                <Text style={{color: "#000080"}}>
                    {"랭크"}
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
        borderColor: '#89a5ea',
        marginBottom: 10
    },
  });

export default Select;