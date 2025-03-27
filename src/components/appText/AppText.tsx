import React from 'react';
import {Text, StyleSheet, Platform, StyleProp, TextStyle} from 'react-native';

interface CustomButtonProps {
    children?: React.ReactNode; // Allows passing other React elements inside
    style?: StyleProp<TextStyle>;
}

function AppText({ children, style }: CustomButtonProps) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

Platform.select({
    ios: {
        fontSize: 18,
        fontFamily: 'Avenir',
    },
    android: {}
})

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    }
})

export default AppText;