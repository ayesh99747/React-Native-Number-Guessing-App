import {StyleSheet, Text, View} from "react-native";


export default function GameOverScreen() {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Game Over!</Text>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess
                the number <Text style={styles.highlight}>Y</Text>.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: "#72063c",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    summaryText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
    highlight: {
        fontWeight: "bold",
        color: "#ddb52f",
    },
})