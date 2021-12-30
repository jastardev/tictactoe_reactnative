import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from "../components/Header";
import PlayBoard from "../components/PlayBoard";
import {useState} from 'react';


function HomeScreen(){

    const [gameOver, setGameOver] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState("x")

    const [icons, setIcons] = useState([<Text/>,<Text/>,<Text/>,<Text/>,<Text/>,<Text/>,<Text/>,<Text/>])
    const [gameState, setGameState] = useState(["", "", "", "", "", "", "", "", ""]);

    return(
        <>
            <Header 
                gameOver={gameOver} 
                currentPlayer={currentPlayer} 
            />
            <PlayBoard 
                gameOver={gameOver}
                setGameOver={setGameOver} 
                currentPlayer={currentPlayer} 
                setCurrentPlayer={setCurrentPlayer}
                icons={icons}
                setIcons={setIcons}
                gameState={gameState}
                setGameState={setGameState} 
            />
            
            <Button title="Reset Board" />
        </>

    )
}



export default HomeScreen;