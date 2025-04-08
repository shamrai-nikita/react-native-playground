import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import WelcomeScreen from "../screens/welcome";
import LoginScreen from "../screens/login";

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
    </Stack.Navigator>
);

export default AuthNavigator;