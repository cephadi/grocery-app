import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonIcon from '../ButtonIcon'
import colors from '../../utils/color'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const HeaderAppBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View>
                    <ButtonIcon 
                        icon={"menu"} 
                        onPress={() => console.log('pressed')} 
                        color={colors.black} size={28} />
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="map-marker" size={26} color={colors.green} />
                    <Text style={styles.locationText}>
                        Indonesia
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <ButtonIcon 
                        icon={"text-search"} 
                        onPress={() => console.log('pressed')} 
                        color={colors.green} size={28} />
                </View>
                <View>
                    <ButtonIcon 
                        icon={"bag-suitcase"} 
                        onPress={() => console.log('pressed')} 
                        color={colors.green} size={28} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationText: {
        color: colors.green,
        fontSize: 18
    }
})

export default HeaderAppBar