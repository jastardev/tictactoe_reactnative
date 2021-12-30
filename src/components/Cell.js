import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";



export default function Cell({i, icon, handleCellClicked}){

    function drawCell(){
        let cellStyle = {
            flex:3,
            alignItems: "center",
            justifyContent: "center"
        };

        if(i<3){
            cellStyle.borderBottomColor = "black";
            cellStyle.borderBottomWidth = 2;
        }
        if(i % 3 === 0){

            cellStyle.borderRightColor = "black";
            cellStyle.borderRightWidth = 2;
        }
        if(i % 3 === 2){
            cellStyle.borderLeftColor = "black";
            cellStyle.borderLeftWidth = 2;
        }
        if(i>5){

            cellStyle.borderTopColor = "black";
            cellStyle.borderTopWidth = 2;
        }

        return cellStyle;
    }

    

    return (
        <TouchableOpacity style={drawCell()} onPress={()=>handleCellClicked(i)}>
            {icon}
        </TouchableOpacity>
    )
}