import {StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import { Entypo, Fontisto } from '@expo/vector-icons';
import Cell from "./Cell";
import { setWarningFilter } from "react-native/Libraries/LogBox/Data/LogBoxData";

export default function PlayBoard({currentPlayer, setCurrentPlayer, setGameOver, gameOver, icons, setIcons, gameState, setGameState }){

    
    
    

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    function handleCellClicked(i){

        let gState = gameState;

        if(gState[i] === "" && !gameOver){
            gState[i] = currentPlayer;
            setGameState(gState);

            redoIcons(gameState);
            checkForWin(gameState);
        }
        
        
    }

    function redoIcons(newGameState){
        
        let newIcons = []
        for(let index in newGameState){
            newIcons[index] = chooseIcon(newGameState[index])
        }
        setIcons(newIcons);
    }

    function changeActivePlayer(){
        if(currentPlayer === "x"){
            setCurrentPlayer("o");
        }else{
            setCurrentPlayer("x");
        }
    }

    function checkForWin(){
        let won = false;
        for(let i = 0; i<8; i++){
            const winCond = winConditions[i];
            let a = gameState[winCond[0]];
            let b = gameState[winCond[1]];
            let c = gameState[winCond[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                won = true;
                break
            } 
        }

        if(won){
            setGameOver(true)
        }else{
            changeActivePlayer();
        }
    }

    

    function chooseIcon(cellState){
        if(cellState === ""){
            return <Text></Text>
        }
        if(cellState === "x"){
            return <Fontisto name={"close-a"} size={36} color="black" />
        }
        if(cellState === "o"){
            return <Entypo name={"circle"} size={36} color="black" />
        }
    }

    return (
        <View style={styles.PlayField}>
            <View style={styles.Row}>
                <Cell i={0} icon={icons[0]} handleCellClicked={handleCellClicked} />
                <Cell i={1} icon={icons[1]} handleCellClicked={handleCellClicked} />
                <Cell i={2} icon={icons[2]} handleCellClicked={handleCellClicked} />
            </View>
            <View style={styles.Row}>
                <Cell i={3} icon={icons[3]} handleCellClicked={handleCellClicked} />
                <Cell i={4} icon={icons[4]} handleCellClicked={handleCellClicked} />
                <Cell i={5} icon={icons[5]} handleCellClicked={handleCellClicked} />
            </View>
            <View style={styles.Row}>
                <Cell i={6} icon={icons[6]} handleCellClicked={handleCellClicked} />
                <Cell i={7} icon={icons[7]} handleCellClicked={handleCellClicked} />
                <Cell i={8} icon={icons[8]} handleCellClicked={handleCellClicked} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PlayField:{
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    Row: {
        height: 75,
        flexDirection: 'row',
    }

})