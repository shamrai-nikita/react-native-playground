import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from "react-native";

import colors from "../../config/colors";

interface LoginButtonProps {
    title: string;
    color?: keyof typeof colors;
    onPress?: () => void;
}

function AppButton({title, color = "primary", onPress}: LoginButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '100%',
        backgroundColor: colors.primary,
        alignSelf: "center",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 7,

    },
    text: {
        color: colors.white,
        fontSize: 20,
        fontFamily: "Courier",
        fontWeight: "bold",
        textTransform: "uppercase",
    }
})

export default AppButton;