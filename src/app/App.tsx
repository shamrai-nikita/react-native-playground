import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Switch, Text, View} from 'react-native';
import AppButton from "../components/buttons";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import React from "react";
import Card from "../components/posts/Card";
import {ListItem} from "../components/listing";
import ViewImage from "../components/viewImage";
import Messages from "../screens/messages";
import {Icon, Screen} from "../components/utils";
import Account from "../screens/account";
import AppTextInput from "../components/text";
import LoginScreen from "../screens/login";
import {createStackNavigator, StackNavigationProp} from "@react-navigation/stack";
import {NavigationContainer, RouteProp, useNavigation} from "@react-navigation/native";
import {StackScreenProps} from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AuthNavigator from "../navigation/AuthNavigator";
import navigationTheme from "../navigation/NavigationTheme";
import AppNavigator from "../navigation/AppNavigator";


type RootStackParamList = {
    Tweets: undefined;
    TweetDetails: { id: number };
};

type TweetsScreenNavigationProp = StackNavigationProp<RootStackParamList, "Tweets">;
type TweetsProps = { navigation: TweetsScreenNavigationProp };
type TweetDetailsRouteProp = RouteProp<RootStackParamList, "TweetDetails">;
type TweetDetailsProps = { route: TweetDetailsRouteProp };

export default function App() {
    const Tweets = ({navigation}: TweetsProps) => (
        <Screen>
            <Text>Tweets</Text>
            <Button title={"New Tweet "} onPress={() => navigation.navigate("TweetDetails", {id: 1})}></Button>
        </Screen>)
    const TweetDetails = ({route}: TweetDetailsProps) => (<Screen><Text>TweetDetails {route.params.id}</Text></Screen>)

    const Link = () => {
        const navigation = useNavigation();

        return (
            <Button title={"Click"} onPress={() => navigation.navigate('TweetDetails')}/>
        )
    }

    const Stack = createStackNavigator();

    const tweetDetailsOptions = ({route}: StackScreenProps<RootStackParamList, 'TweetDetails'>) => ({
        title: `Tweet ID: ${route.params.id}`,
    });

    const StackNavigator = () => (
        <Stack.Navigator
            screenOptions={{headerStyle: {backgroundColor: 'blue'}}}>
            <Stack.Screen
                name="Tweets"
                component={Tweets}
                options={{headerStyle: {backgroundColor: 'tomato'}}}//{tweetDetailsOptions} //TODO: Подчеркивает?
            />
            <Stack.Screen
                name="TweetDetails"
                component={TweetDetails}
            />
        </Stack.Navigator>
    );

    const Account = () => <Screen><Text>Account</Text></Screen>;

    const Tab = createBottomTabNavigator();
    const TabNavigator = () => (
        <Tab.Navigator tabBarOptions={{
            activeBackgroundColor: "tomato",
            activeTintColor: "white",
            inactiveBackgroundColor: "#eee",
            inactiveTintColor: "black",
        }}>
            <Tab.Screen name={"Feed"} component={StackNavigator}
                        options={{tabBarIcon: () => <MaterialCommunityIcons name="home" size={30}/>}}/>
            <Tab.Screen name={"Account"} component={Account}/>
        </Tab.Navigator>
    )

    return (
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator/>
            {/* <AuthNavigator/>*/}
        </NavigationContainer>

        // <Messages/>
        //<ViewImage/>
        //<ListingDetails/>
        //<WelcomeScreen/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
