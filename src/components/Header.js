import React from 'react'
import {StyleSheet, Text} from "react-native";

export default function Header({gameOver, currentPlayer}){
    return(
        <>
            {gameOver && <Text>Game Over! The Winner is: {currentPlayer}</Text>}
        </>
    )
}

const styles = StyleSheet.create({

})