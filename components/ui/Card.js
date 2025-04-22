import {Dimensions, StyleSheet, View} from "react-native";
import {Colors} from "../../util/color";

export default function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
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
});