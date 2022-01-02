import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity  } from "react-native";
import { withNavigation } from "react-navigation";

function GameOverModal({modalVisible, winner, resetGame, drawStatus, navigation}){

    return (
        <View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.heading}>Game Over</Text>
                        {!drawStatus ? <Text>{winner} Won!!</Text> : <Text>It was a draw!</Text>} 
                        <View style={styles.row}>
                            <TouchableOpacity 
                                style={styles.playAgainButton}
                                onPress={()=>resetGame()}
                            >
                                <Text>Play Again</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.quitButton}
                                onPress={()=>{
                                    resetGame();
                                    navigation.navigate("StartScreen");
                                }}
                            >
                                <Text>Quit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView:{
        margin: 5,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    heading: {
        fontSize: 30
    },
    row:{
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    playAgainButton: {
        marginHorizontal: 5,
        width: 100,
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#5ecbe0",
        padding: 10
    },
    quitButton:{
        marginHorizontal: 5,
        width: 100,
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#d16464",
        padding: 10
    }
})

export default withNavigation(GameOverModal)