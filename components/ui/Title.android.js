import {StyleSheet, Text, View, Platform} from "react-native";

export default function Title({children}) {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: "center",
        color: 'white',
        //borderWidth: Platform.OS === 'ios' ? 0 : 4,
        //borderWidth: Platform.select({ios:0, android:4}),
        borderWidth:4,
        borderColor: 'white',
        borderRadius: 4,
        padding: 12,
        fontFamily: 'open-sans-bold',
        maxWidth: '80%',
        width: 300,
    },
});