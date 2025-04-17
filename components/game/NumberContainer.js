import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../util/color";

export default function NumberContainer({children}) {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    numberContainer: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        padding: 24,
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: "bold",
    },
});