import React from 'react'
import {View, StyleSheet, Text} from "react-native";

export default function Header({currentPlayer}){

    
    return(
        <View style={styles.centeredView}>
            <Text style={styles.text}>It is {currentPlayer}'s turn.</Text>
        </View>
    )

    
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20
    },
    text:{
        fontSize: 36
    }
})