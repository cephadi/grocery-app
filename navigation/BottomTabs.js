import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../utils/color'
import CartScreen from '../screens/CartScreen'
import AccountScreen from '../screens/AccountScreen'
import NotificationScreen from '../screens/NotificationScreen'
import SettingScreen from '../screens/SettingScreen'

const Tabs = createBottomTabNavigator()

const BottomTabs = () => {
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }} initialRouteName="Home">
            <Tabs.Screen name="Cart" component={CartScreen} options={{
                tabBarIcon: ({ size, focused }) => (
                    <MaterialCommunityIcons 
                        name="cart-outline"
                        size={focused ? (size + 5) : (size + 3)}
                        color={focused ? colors.green : colors.grey} />
                )
            }} />
            <Tabs.Screen name="Account" component={AccountScreen} options={{
                tabBarIcon: ({ size, focused }) => (
                    <MaterialCommunityIcons 
                        name="account-circle-outline"
                        size={focused ? (size + 5) : (size + 3)}
                        color={focused ? colors.green : colors.grey} />
                )
            }} />
            <Tabs.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ size, focused }) => (
                    <MaterialCommunityIcons 
                        name="home-outline"
                        size={focused ? (size + 5) : (size + 3)}
                        color={focused ? colors.green : colors.grey} />
                )
            }} />
            <Tabs.Screen name="Notification" component={NotificationScreen} options={{
                tabBarIcon: ({ size, focused }) => (
                    <MaterialCommunityIcons 
                        name="bell-outline"
                        size={focused ? (size + 5) : (size + 3)}
                        color={focused ? colors.green : colors.grey} />
                )
            }} />
            <Tabs.Screen name="Setting" component={SettingScreen} options={{
                tabBarIcon: ({ size, focused }) => (
                    <MaterialCommunityIcons 
                        name="cog-outline"
                        size={focused ? (size + 5) : (size + 3)}
                        color={focused ? colors.green : colors.grey} />
                )
            }} />
        </Tabs.Navigator>
    )
}

export default BottomTabs