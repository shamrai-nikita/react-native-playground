import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";

import {ListItem, ListItemSeparator, ListItemDeleteAction} from "../listing";
import Screen from "../utils/Screen";

interface MessagesProps {

}

const initialMessages = [
    {
        id: 1,
        title: 'Ayasa D Kurd 10',
        description: '2500$',
        image: require('../../../assets/YataoPan_D_Kurd_10_front.webp'),
    },
    {
        id: 2,
        title: 'AyaSounds D Kurd 10',
        description: '1800$',
        image: require('../../../assets/YataoPan_D_Kurd_10_front.webp'),
    },
]

function Messages() {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = (message: { id: number; }) => {
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages)
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message selected', item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages([
                    {
                        id: 2,
                        title: 'AyaSounds D Kurd 10',
                        description: '1800$',
                        image: require('../../../assets/YataoPan_D_Kurd_10_front.webp'),
                    }
                ])}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({})

export default Messages;