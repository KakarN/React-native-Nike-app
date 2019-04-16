import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default class ShoppingCartScreen extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>You have no items on your cart!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
