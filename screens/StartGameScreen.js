import {Alert, StyleSheet, TextInput, ToastAndroid, View} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import {useState} from "react";
import {Colors} from "../util/color";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState("");

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number!", "Number has to be a number between 1 and 99.", [
                {text: "Okay", style: "destructive", onPress: resetInputHandler},
            ]);
            return;
        }
        onPickNumber(chosenNumber);
        setEnteredNumber("");
    }

    function resetInputHandler() {
        setEnteredNumber("");
        ToastAndroid.show("Text reset!", ToastAndroid.SHORT);
    }

    return (
        <View style={styles.rootContainer}>
            <Title children="Guess My Number"/>
            <Card style={styles.inputContainer}>
                <InstructionText>Enter a number</InstructionText>
                <TextInput
                    style={styles.input}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={{flex: 1}}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                    <View style={{flex: 1}}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    inputContainer: {
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 16,
    },
    input: {
        height: 55,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",

        placeholderColor: Colors.accent500,
        borderRadius: 6,
    },
});
