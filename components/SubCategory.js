import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import colors from '../utils/color'

const listSub = ['All Fruits', 'Fruits', 'Ripe Fruits', 'Unripe Fruits', 'Fresh Fruits']

const SubCategoryItem = ({ subcategory, onPress, isSelected }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.subCategoryItemContainer,
                pressed ? { opacity: 0.7 } : null,
                isSelected ? { borderBottomWidth: 3, borderBottomColor: colors.green } : null
            ]}>
            <Text style={styles.subCategoryText}>{subcategory}</Text>
        </Pressable>
    )
}

const SubCategory = () => {
    const [subCategorySelected, setSubCategorySelected] = useState('All Fruits')
    
    const selectedHandler = (sub) => {
        setSubCategorySelected(sub)
    }

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            {listSub.map((obj,i) => (
                <SubCategoryItem 
                    key={i} 
                    subcategory={obj} 
                    onPress={() => selectedHandler(obj)} 
                    isSelected={subCategorySelected === obj} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    subCategoryItemContainer: {
        padding: 6,
        margin: 6
    },
    subCategoryText: {
        fontWeight: 'bold'
    }
})

export default SubCategory