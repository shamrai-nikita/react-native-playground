import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import AppButton from "../buttons";

function MainScreen() {
    return (
        <ImageBackground
            source={require('../../../assets/test_2.jpg')}
            blurRadius={2}
            style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../../assets/Wix-Logo-PNG2.png')}></Image>
                <Text style={styles.title}>This is my BLOG</Text>
            </View>
            <View style={{ marginBottom: 100, width: "100%", alignItems: "center" }}>
                <AppButton title="Login"/>
                <AppButton title="Register" color="secondary" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        height: 70,
        width: '100%',
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        height: 70,
        width: '100%',
        backgroundColor: '#4ecdc4',
    },
    logo: {
        height: 100,
        width: 200,
        position: 'absolute',
    },
    title: {
        fontSize: 25,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        top: 100
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
})

export default MainScreen;