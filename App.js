import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import GameScreen from './src/screens/GameScreen';
import StartScreen from './src/screens/StartScreen';

const navigator = createStackNavigator(
    {
        StartScreen: StartScreen,
        GameScreen: GameScreen
    },
    {
        initialRouteName: "StartScreen",
        defaultNavigationOptions:{
            title: "Tic Tac Toe"
        },
    },
)
export default createAppContainer(navigator)
