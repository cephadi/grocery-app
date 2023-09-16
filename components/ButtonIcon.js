import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ButtonIcon = ({ icon, color, onPress, size }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                pressed ? { opacity: 0.7 } : null
            ]}>
            <MaterialCommunityIcons name={icon} color={color} size={size} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 6,
        padding: 4
    }
})

export default ButtonIcon