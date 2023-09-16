import React from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../utils/color'
import UnitCategory from './UnitCategory'

const ButtonItem = ({ onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.buttonContainer,
                pressed ? { opacity: 0.7 } : null
            ]}>
            <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
    )
}

const ProductItem = ({ sourceImage, productName, listUnit, productPrice, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={sourceImage} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
            </View>
            <View>
                <UnitCategory listUnits={listUnit} />
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.productNameText}>{productName}</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.productPriceText}>{productPrice}</Text>
                    <ButtonItem onPress={onPress} />
                </View>
            </View>
        </View>
    )
}

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        width: width / 2.4,
        backgroundColor: colors.white,
        elevation: 4,
        borderRadius: 8,
        padding: 6,
        margin: 8
    },
    detailContainer: {
        marginVertical: 6
    },
    imageContainer: {
        alignSelf: 'center',
        marginVertical: 8,
        width: 60,
        height: 60
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    productNameText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    productPriceText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.green
    },
    buttonContainer: {
        backgroundColor: colors.green,
        padding: 4,
        borderRadius: 6,
        elevation: 2
    },
    buttonText: {
        color: colors.white
    }
})

export default ProductItem