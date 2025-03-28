import React from 'react';
import {StyleSheet, Platform, SafeAreaView, StyleProp, TextStyle, ViewStyle} from 'react-native';

interface ScreenProps {
    children?: React.ReactNode; // Allows passing other React elements inside
    style?: StyleProp<ViewStyle>;
}

function Screen({children, style}: ScreenProps) {
    return (
        <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
})

export default Screen;