import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'

const BuyButton = props => {
    const onPress = () => {
        console.log('on press')
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={onPress} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>BUY</Text>
            </BorderlessButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: -1,
        marginTop: 10,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        backgroundColor: 'black',
        paddingVertical: 14,
        paddingHorizontal: 50,
        borderRadius: 50,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default BuyButton
