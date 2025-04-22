import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../util/color";

export default function NumberContainer({children}) {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

// Screen is the whole screen and windows is the visible part of the screen (excluding the status bar)
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    numberContainer: {
        fontSize: 28,
        fontFamily: 'open-sans-bold',
        color: "#fff",
        padding: deviceWidth<380 ? 12 : 24,
        margin: deviceWidth<380 ? 12 : 24,
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth<380 ? 28 : 36,
        fontWeight: "bold",
    },
});