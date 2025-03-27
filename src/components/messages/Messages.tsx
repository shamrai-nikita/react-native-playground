import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";

import {ListItem, ListItemSeparator, ListItemDeleteAction} from "../listing";

interface MessagesProps {

}

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../../../assets/YataoPan_D_Kurd_10_front.webp'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../../../assets/YataoPan_D_Kurd_10_front.webp'),
    },
]

function Messages() {
    return (
        <SafeAreaView>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message selected', item)}
                        renderRightActions={ListItemDeleteAction}
                    />}
                ItemSeparatorComponent = {ListItemSeparator}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default Messages;