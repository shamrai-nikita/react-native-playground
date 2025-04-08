import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

import colors from "../../config/colors";
import AppText from "../appText";

interface CardProps {
    title: string;
    subTitle: string;
    image: ImageSourcePropType;
    onPress?: () => void;
}

function Card({title, subTitle, image, onPress}: CardProps) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image}/>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 4,
        fontSize: 22,
        fontWeight: "bold",
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        height: 200,
    }
})

export default Card;