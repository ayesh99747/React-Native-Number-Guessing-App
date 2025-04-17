import {StyleSheet, Text} from "react-native";
import {Colors} from "../../util/color";

export default function InstructionText({children, style}) {
    return (
        <Text style={[styles.instructionText, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
        marginBottom: 12,
        fontFamily: 'open-sans',
    },
});