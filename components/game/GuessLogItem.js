import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../util/color";

export default function GuessLogItem(props) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{props.roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {props.guess}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 20,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    itemText: {
        fontFamily: 'open-sans',
    },
})