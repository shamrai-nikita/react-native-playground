import React from 'react';
import {ImageSourcePropType, StyleSheet, View} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from "../../config/colors";

/*
interface ListItemDeleteActionProps {
    onPress?: () => void;
}
{onPress}: ListItemDeleteActionProps
*/

function ListItemDeleteAction() {
    return (
     //   <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={"delete"} size={30} color={colors.white} />
            </View>
      //  </TouchableWithoutFeedback
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default ListItemDeleteAction;