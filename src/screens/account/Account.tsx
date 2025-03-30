import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import {Icon, Screen} from "../../components/utils";
import {ListItem, ListItemSeparator} from "../../components/listing";
import colors from "../../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface AccountProps {
}

const menuItems: {
    title: string;
    icon: {
        name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
        backgroundColor: string;
    };
}[] = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        }
    }
]

function Account() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={"Nikita Shamrai"}
                    subTitle={"nikitash@wix.com"}
                    image={require("../../../assets/YataoPan_D_Kurd_10_front.webp")}
                />
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems}
                          keyExtractor={menuItem => menuItem.title}
                          renderItem={({item}) => (
                              <ListItem title={item.title} IconComponent={<Icon name={item.icon.name}
                                                                                backgroundColor={item.icon.backgroundColor}/>}/>
                          )}
                          ItemSeparatorComponent={ListItemSeparator}
                >
                </FlatList>
            </View>
            <ListItem title={"Log Out"} IconComponent={<Icon name={"logout"} backgroundColor={"#ffe66d"}/>}/>
        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.ultralight,
    }
})

export default Account;