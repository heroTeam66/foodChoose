import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Onboarding, FoodDetail } from "./../screens/";
import React from "React"

const Tab = createBottomTabNavigator();


export default function AppNavigator() {
    return (
       <Tab.Navigator>
    <Tab.Screen name="Onboarding" component={Onboarding}/>
    <Tab.Screen name="FoodDetail" component={FoodDetail}/>

      </Tab.Navigator>
    )
}

