import React from 'react';
import {StyleSheet, View, Image, ImageSourcePropType, TouchableHighlight} from "react-native";

import AppText from "../appText";
import colors from "../../config/colors";
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {GestureHandlerRootView} from "react-native-gesture-handler";

interface ListItemProps {
    title: string;
    subTitle?: string;
    image?: ImageSourcePropType;
    onPress?: () => void;
    renderRightActions?: (progressAnimatedValue: any, dragAnimatedValue: any, swipeable: any) => React.ReactNode;
    IconComponent?: React.ReactNode;
}

function ListItem({title, subTitle, image, onPress, renderRightActions, IconComponent}: ListItemProps) {
    return (
        <GestureHandlerRootView style={{width: '100%'}}>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.light}
                    onPress={onPress}
                >
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image}/>}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 15,
        padding: 10,
        backgroundColor: colors.white
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
    },
    title: {
        fontWeight: "500"
    },
    subTitle: {
        color: colors.medium
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    }
})

export default ListItem;