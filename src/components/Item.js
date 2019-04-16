import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native'
import Animated from 'react-native-reanimated'

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window')

export default class Item extends React.Component {
    constructor(props) {
        super(props)
        this.scrollX = this.props.scrollX
        this.idx = this.props.idx
    }

    render() {
        const {shoe} = this.props

        const scale = Animated.interpolate(this.scrollX, {
            inputRange: [
                (this.idx - 1) * ScreenWidth,
                this.idx * ScreenWidth,
                (this.idx + 1) * ScreenWidth
            ],
            outputRange: [
                0.1,
                1,
                0.1
            ],
            extrapolate: Animated.Extrapolate.CLAMP
        })

        const translateY = Animated.interpolate(this.scrollX, {
            inputRange: [
                (this.idx - 1) * ScreenWidth,
                this.idx * ScreenWidth,
                (this.idx + 1) * ScreenWidth
            ],
            outputRange: [
                80,
                0,
                80
            ],
            extrapolate: Animated.Extrapolate.CLAMP
        })

        const opacity = Animated.interpolate(this.scrollX, {
            inputRange: [
                (this.idx -1) * ScreenWidth,
                this.idx * ScreenWidth,
                (this.idx + 1) * ScreenWidth
            ],
            outputRange: [
                0, 1, 0
            ],
            extrapolate: Animated.Extrapolate.CLAMP
        })

        return (
            <View style={styles.container}>
                <Animated.Image
                    source={shoe.url}
                    style={[styles.shoeImageStyle, {
                        transform: [{scale: scale}]
                    }]}
                />
                <Animated.View style={[styles.textWrapper, {opacity: opacity, transform: [{translateY}]}]}>
                    <Text style={styles.genderStyle}>Men's Shoe</Text>
                    <Text style={styles.titleStyle}>{shoe.title}</Text>
                    <Text style={styles.priceStyle}>{shoe.price}</Text>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: ScreenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shoeImageStyle: {
        // borderWidth: 2,
        // borderColor: 'lightgreen',
        width: ((ScreenWidth * 70) / 100),
        height: (ScreenWidth * 70) / 100,
        resizeMode: 'cover',
    },
    textWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    genderStyle: {
        color: 'darkgray',
        fontSize: 20,
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    priceStyle: {
        color: 'darkgray',
        fontSize: 20,
    }
})
