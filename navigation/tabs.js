import React from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/";
import Search from "../screens/Search"
import { icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "6%",
        backgroundColor: COLORS.black
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.dashboard_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Search":
                            return (
                                <Image
                                    source={icons.search_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        // case "Notification":
                        //     return (
                        //         <Image
                        //             source={icons.notification_icon}
                        //             resizeMode="contain"
                        //             style={{
                        //                 tintColor: tintColor,
                        //                 width: 25,
                        //                 height: 25
                        //             }}
                        //         />
                        //     )

                        // case "Setting":
                        //     return (
                        //         <Image
                        //             source={icons.menu_icon}
                        //             resizeMode="contain"
                        //             style={{
                        //                 tintColor: tintColor,
                        //                 width: 25,
                        //                 height: 25
                        //             }}
                        //         />
                        //     )
                    }
                }
            })}
        >
            <Tab.Screen
            options={{headerShown: false}}
                name="Home"
                component={Home}
            />
            <Tab.Screen
            options={{headerShown: false}}
                name="Search"
                component={Search}
            />
            {/* <Tab.Screen
            options={{headerShown: false}}
                name="Notification"
                component={Home}
            /> */}
            {/* <Tab.Screen
            options={{headerShown: false}}
                name="Setting"
                component={Home}
            /> */}
        </Tab.Navigator>
    )
}

export default Tabs;