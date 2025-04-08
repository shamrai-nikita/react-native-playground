import React from 'react';
import {StyleSheet, TouchableOpacity, View, TextInput, TextInputProps as RNTextInputProps} from "react-native";

import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../../config/colors";


export interface AppTextInputProps extends RNTextInputProps {
    icon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

function AppTextInput({icon, ...otherProps}: AppTextInputProps) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>
            <TextInput keyboardType={"default"} clearButtonMode={"while-editing"}
                       style={styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        flexDirection: 'row',
        borderRadius: 25,
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    textInput: {
        fontSize: 20,
        flex: 1,
    },
    icon: {
        marginRight: 10,
    }
})

export default AppTextInput;