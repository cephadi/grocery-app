import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import colors from '../utils/color'

const UnitCategoryItem = ({ unit, onPress, isSelected }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.unitItemContainer,
                pressed ? { opacity: 0.7 } : null,
                isSelected ? { borderWidth: 1, borderColor: colors.green } : null
            ]}>
            <Text style={styles.unitText}>{unit}</Text>
        </Pressable>
    )
}

const UnitCategory = ({ listUnits }) => {
    const [unitSelected, setUnitSelected] = useState('1 kg')
    
    const selectedHandler = (sub) => {
        setUnitSelected(sub)
    }

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            {listUnits.map((obj,i) => (
                <UnitCategoryItem 
                    key={i} 
                    unit={obj} 
                    onPress={() => selectedHandler(obj)} 
                    isSelected={unitSelected === obj} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    unitItemContainer: {
        padding: 6,
        marginRight: 6,
        marginVertical: 8,
        borderRadius: 6,
        backgroundColor: '#FAFAFA',
        elevation: 2
    },
    unitText: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default UnitCategory