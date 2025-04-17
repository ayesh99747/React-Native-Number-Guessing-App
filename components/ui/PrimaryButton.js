import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../util/color";

function PrimaryButton({children, onPress}) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) =>
                    pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 20,
        elevation: 2,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        shadowOpacity: 0.25,
        borderWidth: 1,
        borderColor: Colors.accent500,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: "#3b021f",
        borderRadius: 20,
    },
});
