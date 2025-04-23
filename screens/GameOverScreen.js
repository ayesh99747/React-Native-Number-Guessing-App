import {Dimensions, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import Title from "../components/ui/Title";
import {Colors} from "../util/color";
import PrimaryButton from "../components/ui/PrimaryButton";


export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if (width < 380 ) {
        imageSize = 150;
    }

    if(height < 400 ) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }



    return (
        <ScrollView style={[styles.screen]}>
            <View style={styles.rootContainer}>
                <Title>Game Over!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image source={require('../assets/images/success.png')} style={styles.image}/>
                </View>
                <View>
                    <Text style={styles.summaryText}>Your phone needed
                        <Text style={styles.highlightText}> {roundsNumber} </Text>
                        rounds to guess the number
                        <Text style={styles.highlightText}> {userNumber} </Text>
                        .</Text>
                </View>
                <PrimaryButton onPress={onStartNewGame}>
                    Start New Game
                </PrimaryButton>
            </View>
        </ScrollView>
    );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    imageContainer: {
/*        width: deviceWidth<380 ? 150 : 300,
        height: deviceWidth<380 ? 150 : 300,
        borderRadius: deviceWidth<380 ? 75 : 150,*/
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        color: Colors.accent500,
        marginBottom: 24,
    },
    highlightText: {
        fontFamily: "open-sans-bold",
        color: Colors.primary500,
    }
})