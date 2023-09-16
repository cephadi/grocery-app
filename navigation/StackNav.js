import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from './BottomTabs'

const Stack = createNativeStackNavigator()

const StackNav = () => {
    return (
        <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
    )
}

export default StackNav