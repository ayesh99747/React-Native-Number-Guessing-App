import {StatusBar} from 'expo-status-bar';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import {Colors} from "./util/color";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if (gameIsOver && userNumber) {
        screen =
            <GameOverScreen onStartNewGame={startNewGameHandler} userNumber={userNumber} roundsNumber={guessRounds}/>
    }


    return (
        <>
            <StatusBar style="light"/>
            <LinearGradient
                style={styles.rootScreen}
                colors={[Colors.primary700, Colors.accent500]}>
                <ImageBackground
                    source={require("./assets/images/background.png")}
                    resizeMode={"cover"}
                    style={styles.rootScreen}
                    imageStyle={styles.imageBackground}>
                    <SafeAreaView style={styles.rootScreen}>
                        {screen}
                    </SafeAreaView>

                </ImageBackground>
            </LinearGradient>

        </>

    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    imageBackground: {
        opacity: 0.15,
    },
});
