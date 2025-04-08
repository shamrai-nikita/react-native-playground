import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Screen} from "../../components/utils";
import Card from "../../components/posts";
import colors from "../../config/colors";
import {NavigationProp} from "@react-navigation/native";

const listings = [
    {
        id: 1,
        title: 'How to play handpan',
        info: '10 minutes read',
        image: require('../../../assets/hanpdan_for_sale_1.webp')
    },
    {
        id: 2,
        title: 'How to choose handpan',
        info: '5 minutes read',
        image: require('../../../assets/YataoPan_D_Kurd_10_front.webp')
    }
]

function ListingsScreen({navigation}: { navigation: NavigationProp<any> }) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>
                    <Card
                        title={item.title}
                        subTitle={item.info}
                        image={item.image}
                        onPress={() => navigation.navigate("ListingDetails", item)}
                    />
                }
            >

            </FlatList>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;