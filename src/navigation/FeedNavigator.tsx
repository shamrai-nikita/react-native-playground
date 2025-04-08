import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {ListingDetails, ListingsScreen} from "../screens/listing";

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={"Listings"} component={ListingsScreen}></Stack.Screen>
        <Stack.Screen name={"ListingDetails"} component={ListingDetails}></Stack.Screen>
    </Stack.Navigator>
);

export default FeedNavigator;