import React, { useEffect } from 'react';
import {withNavigation} from 'react-navigation';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from "../components/Header";
import PlayBoard from "../components/PlayBoard";
import {useState} from 'react';
import GameOverModal from '../components/GameOverModal';


function GameScreen({navigation}){

    let players = navigation.getParam("players")

    const [gameOver, setGameOver] = useState(false);
    const [drawStatus, setDrawStatus] = useState(false);

    const [currentPlayer, setCurrentPlayer] = useState(players[0])
    const [currentIcon, setCurrentIcon] = useState("x")

    const [icons, setIcons] = useState([<Text/>,<Text/>,<Text/>,<Text/>,<Text/>,<Text/>,<Text/>,<Text/>])
    const [gameState, setGameState] = useState(["", "", "", "", "", "", "", "", ""]);

    useEffect(()=>{
        setCurrentPlayer(getPlayerName())
    }, [currentIcon])

    function getPlayerName(){
        if (currentIcon==="x"){
            return players[0];
        }
        else if (currentIcon==="o"){
            return players[1];
        }
        else{
            return "";
        }
    }

    function resetGame(){
        setGameOver(false);
        setIcons([<Text/>,<Text/>,<Text/>,<Text/>,<Text/>,<Text/>,<Text/>,<Text/>]);
        setGameState(["", "", "", "", "", "", "", "", ""]);
        setCurrentIcon("x");
    }


    return(
        <>
            <Header 
                currentPlayer={currentPlayer}
            />
            <GameOverModal  
                modalVisible={gameOver} 
                winner={currentPlayer}
                drawStatus={drawStatus}
                resetGame={resetGame}
            />
            <PlayBoard 
                gameOver={gameOver}
                setGameOver={setGameOver} 
                currentIcon={currentIcon} 
                setCurrentIcon={setCurrentIcon}
                icons={icons}
                setIcons={setIcons}
                gameState={gameState}
                setGameState={setGameState} 
                setDrawStatus={setDrawStatus}
            />
        </>

    )
}



export default withNavigation(GameScreen);