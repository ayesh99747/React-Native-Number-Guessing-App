import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import {Colors} from "../util/color";
import PrimaryButton from "../components/ui/PrimaryButton";


export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image}/>
            </View>
            <View>
                <Text style={styles.summaryText}>Your phone needed
                    <Text style={styles.highlightText}> {roundsNumber} </Text>
                    rounds to guess the number
                    <Text style={styles.highlightText}> {userNumber} </Text>
                    .</Text>
            </View>
            <PrimaryButton onPress={onStartNewGame}>
                Start New Game
            </PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: Colors.primary500,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        color: Colors.accent500,
        marginBottom: 24,
    },
    highlightText: {
        fontFamily: "open-sans-bold",
        color: Colors.accent500,
    }
})