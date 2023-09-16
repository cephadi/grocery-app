import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import HeaderAppBar from '../components/home/HeaderAppBar'
import CategoriesGrocery from '../components/CategoriesGrocery'
import SubCategory from '../components/SubCategory'
import ProductItem from '../components/ProductItem'

const data = [
    {
        sourceImage: require('../assets/fruits-asset/fruit-1.png'),
        productName: 'Fruit 1',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
    {
        sourceImage: require('../assets/fruits-asset/fruit-2.png'),
        productName: 'Fruit 2',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
    {
        sourceImage: require('../assets/fruits-asset/fruit-3.png'),
        productName: 'Fruit 3',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
    {
        sourceImage: require('../assets/fruits-asset/fruit-4.png'),
        productName: 'Fruit 4',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
    {
        sourceImage: require('../assets/fruits-asset/fruit-5.png'),
        productName: 'Fruit 5',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
    {
        sourceImage: require('../assets/fruits-asset/fruit-6.png'),
        productName: 'Fruit 6',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
    {
        sourceImage: require('../assets/fruits-asset/fruit-7.png'),
        productName: 'Fruit 7',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
    {
        sourceImage: require('../assets/fruits-asset/fruit-8.png'),
        productName: 'Fruit 8',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
    {
        sourceImage: require('../assets/fruits-asset/fruit-9.png'),
        productName: 'Fruit 9',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
    {
        sourceImage: require('../assets/fruits-asset/fruit-10.png'),
        productName: 'Fruit 10',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
    {
        sourceImage: require('../assets/fruits-asset/fruit-11.png'),
        productName: 'Fruit 11',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
    {
        sourceImage: require('../assets/fruits-asset/fruit-12.png'),
        productName: 'Fruit 12',
        listUnit: ['500 gram', '1 kg', '2 kg'], 
        productPrice: 'Rp. 10000'
    },
]

const HomeScreen = () => {
    return (
        <ScreenContainer>
            <View style={styles.spaceBottom}>
                <HeaderAppBar />
            </View>
            <View style={styles.spaceBottom}>
                <CategoriesGrocery />
            </View>
            <View style={styles.spaceBottom}>
                <SubCategory />
            </View>
            <FlatList
                contentContainerStyle={{
                    alignSelf: 'center'
                }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={data}
                renderItem={({ item }) => (
                    <ProductItem {...item} onPress={() => console.log('Product Pressed')} />
                )} />
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    spaceBottom: {
        marginBottom: 8
    }
})

export default HomeScreen