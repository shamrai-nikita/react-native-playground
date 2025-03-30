import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Switch, Text, View} from 'react-native';
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
import ListingDetails from "../screens/listing";

export default function App() {
    const [isNew, setIsNew] = React.useState(false);
    return (
        <LoginScreen/>
        // <Screen>
        //     <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)}></Switch>
        // </Screen>
        // <Screen>
        //     <AppTextInput placeholder={"Username"} icon={"email"}></AppTextInput>
        // </Screen>
        //<Account/>
        //<Messages/>
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
