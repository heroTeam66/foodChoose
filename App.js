import React from "react";
import {Image,TouchableOpacity} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Onboarding, FoodDetail } from "./screens/";
import Tabs from "./navigation/tabs";
import { icons, COLORS, SIZES } from './constants';
import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
    })
    
    if(!loaded){
    return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName={'Onboarding'}
            >
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white
                        },
                        headerLeft: null,
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Pressed")}
                            >
                                <Image
                                    source={icons.barMenu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />

                <Stack.Screen
                    name="FoodDetail"
                    component={FoodDetail}
                    options={{ headerShown: false }}
                />

                < Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Menu")}
                            >
                                <Image
                                    source={icons.menu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default () => {
    return <App />;
};
