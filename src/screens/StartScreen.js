import react, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

function StartScreen({navigation}){

    const players = useRef(["", ""])

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome To The Game</Text>
            <Text style={styles.instructions}>Enter the player's names.</Text>
            <View style={styles.inputRow}>
                <Text style={styles.playerHeading}>Player One (X's):</Text>
                <TextInput
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    style={styles.inputStyle}
                    value={players[0]}
                    onChangeText={(name)=>players[0]=name}
                />
            </View>
            <View style={styles.inputRow}>
                <Text style={styles.playerHeading} >Player Two (O's):</Text>
                <TextInput
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    style={styles.inputStyle}
                    value={players[1]}
                    onChangeText={(name)=>players[1]=name}
                />
            </View>

            <TouchableOpacity 
                style={styles.startButton}
                onPress={()=>{
                    navigation.navigate("GameScreen", {players: players})
                }}
            >
                <Text>Start Game</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10
    },
    heading:{
        textAlign: "center",
        marginTop: 10,
        fontSize: 36
    },
    instructions:{
        marginTop: 10,
        fontSize: 24
    },
    screenView:{

    },
    playerHeading:{
        fontSize: 18,
        textAlign: "center",
        flexDirection: "column",
        alignSelf: "center"
    },
    inputRow:{
        marginTop: 5,
        flexDirection: 'row',
    },
    inputStyle:{
        flex: 1,
        fontSize: 18,
        height: 40,
        borderRadius: 5,
        marginVertical: 10,
        marginLeft: 5,
        paddingHorizontal: 5,
        backgroundColor: '#cfcfcf',
        flexDirection: 'row'
    },
    startButton:{
        marginVertical: 10,
        alignSelf: "center",
        width: 200,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#5ecbe0",
        padding: 10 
    }
    
})

export default withNavigation(StartScreen);