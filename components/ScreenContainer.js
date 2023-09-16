import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

const ScreenContainer = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 22,
        paddingHorizontal: 14
    }
})

export default ScreenContainer