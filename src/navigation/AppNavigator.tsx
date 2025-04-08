import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Account from "../screens/account";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name={"Feed"} component={FeedNavigator}/>
        <Tab.Screen name={"Account"} component={Account}/>
    </Tab.Navigator>
)

export default AppNavigator;