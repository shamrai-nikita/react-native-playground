import React from 'react';
import {StyleSheet, View, Image, SafeAreaView} from "react-native";

import colors from "../../config/colors";
import AppText from "../../components/appText";
import {ListItem} from "../../components/listing";


function ListingDetails() {
    return (
        <SafeAreaView>
            <Image style={styles.image} source={require('../../../assets/hanpdan_for_sale_1.webp')}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Handpan for sale</AppText>
                <AppText style={styles.price}>800$</AppText>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                    title="Handpan guru"
                    subTitle="10 items"
                    image={require('../../../assets/YataoPan_D_Kurd_10_front.webp')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
        paddingBottom: 5
    },
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        fontSize: 22,
        fontWeight: "500",
    },
    price: {
        color: colors.secondary,
        fontWeight: "500",
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 30
    }
})

export default ListingDetails;