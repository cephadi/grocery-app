import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import colors from '../utils/color'

// 'All', 'Vegetables', 'Fruits', 'Grocery', 'Snacks'
const listCategory = [
    { color: '#CCE5D1', name: 'All' },
    { color: '#E2C7C9', name: 'Vegetables' },
    { color: '#F3EBC6', name: 'Fruits' },
    { color: '#F3DAC5', name: 'Grocery' },
    { color: '#92BBB4', name: 'Snacks' },
]

const CategoryItem = ({ category, onPress, isSelected }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.categoryItemContainer,
                { backgroundColor: category.color, elevation: 2 },
                pressed ? { opacity: 0.7 } : null,
                isSelected ? { borderWidth: 1, borderColor: colors.green2 } : null
            ]} >
            <Text style={styles.categoryText}>{category.name}</Text>
        </Pressable>
    )
}

const CategoriesGrocery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const categorySelectedHandler = (cat) => {
        setSelectedCategory(cat)
    }

    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingVertical: 4
            }}>
            {listCategory.map((obj, i) => (
                <CategoryItem 
                    key={i}
                    category={obj} 
                    onPress={() => categorySelectedHandler(obj.name)} 
                    isSelected={selectedCategory === obj.name} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    categoryItemContainer: {
        padding: 8,
        margin: 6,
        borderRadius: 8
    },
    categoryText: {
        fontWeight: 'bold'
    }
})

export default CategoriesGrocery