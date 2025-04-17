import {Alert, StyleSheet, Text, View} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons";

function generateRandomNumberBetween(min, max, exclude) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;

    if (rndNumber === exclude) {
        return generateRandomNumberBetween(min, max, exclude);
    } else {
        return rndNumber;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [rounds, setRounds] = useState(0);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if ((direction === "lower" && currentGuess < userNumber) || (direction === "higher" && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{text: "Sorry!", style: "cancel"}]);
            return;
        }

        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        setCurrentGuess(generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess));

        setRounds((prevRounds) => prevRounds + 1);
    }

    return (
        <View style={styles.screen}>
            <Title children="Opponent's Guess"/>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
                            <Ionicons name="add-sharp" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                            <Ionicons name="remove-sharp" size={24} color="white"/>

                        </PrimaryButton>
                    </View>
                </View>
                <Text>Log Rounds</Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingTop: 48,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    instructionText: {
        marginBottom: 12,
    },
    button: {
        flex: 1,
        marginHorizontal: 8,
    },
});