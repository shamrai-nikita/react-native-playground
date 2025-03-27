import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from "react-native";

import colors from "../../config/colors";

interface LoginButtonProps {
    title: string;
    color?: keyof typeof colors;
}

function AppButton({title, color = "primary"}: LoginButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={() => {alert("Login")}}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: '70%',
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