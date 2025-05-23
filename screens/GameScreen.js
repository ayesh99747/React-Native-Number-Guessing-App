import {Alert, FlatList, StyleSheet, useWindowDimensions, View} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const  {width , height} = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    // This effect is used to set the min and max boundaries when the component initialises.
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        const newRandomNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
        setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
        setRounds((prevRounds) => prevRounds + 1);
    }

    let content = <>
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

        </Card>
    </>

    if (width > 500) {
        content = <>
            <View  style={styles.buttonsContainerWide}>
                <View style={styles.button}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
                        <Ionicons name="add-sharp" size={24} color="white"/>
                    </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>

                <View style={styles.button}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                        <Ionicons name="remove-sharp" size={24} color="white"/>
                    </PrimaryButton>
                </View>

            </View>
        </>
    }

    return (
        <View style={styles.screen}>
            <Title children="Opponent's Guess"/>
            {content}
            <InstructionText style={styles.instructionText}>Previous Guesses</InstructionText>
            <View style={styles.listContainer}>
                <FlatList data={guessRounds} renderItem={(itemData) => {
                    return <View>
                        <GuessLogItem roundNumber={itemData.index + 1}
                                      guess={itemData.item}>{itemData.item}</GuessLogItem>
                    </View>
                }} keyExtractor={(item) => item}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingTop: 48,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonsContainerWide:{
      flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    instructionText: {
        marginBottom: 12,
    },
    button: {
        flex: 1,
        marginHorizontal: 8,
    },
    listContainer: {
        flex: 1,
    }
});