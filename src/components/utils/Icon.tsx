import React from 'react';
import {StyleSheet, Platform, SafeAreaView, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

interface IconProps {
    name: React.ComponentProps<typeof MaterialCommunityIcons>['name']//keyof typeof MaterialCommunityIcons.glyphMap;
    size?: number;
    backgroundColor?: string;
    iconColor?: string;
}

function Icon({name, size = 40, backgroundColor = 'black', iconColor = 'white'}: IconProps) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: backgroundColor,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <MaterialCommunityIcons name={name} size={size / 2} color={iconColor}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Icon;