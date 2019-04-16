import React from 'react'
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import Animated, {Easing} from 'react-native-reanimated'
import {FontAwesome} from '@expo/vector-icons';
import {BorderlessButton} from 'react-native-gesture-handler'

const {width: ScreenWidth} = Dimensions.get('window')

export default class WishButton extends React.Component {
    constructor(props) {
        super(props)
        this.idx = this.props.idx
        this.scrollX = this.props.scrollX
    }

    _onPress = () => {
        this.props.updateWishList(this.idx)
    }

    render() {
        const {shoe} = this.props

        let iconName = "heart-o"
        let addString = "Add to wish list"

        if (shoe.isWished) {
            iconName = "heart"
            addString = ""
        }

        const opacity = Animated.interpolate(this.scrollX, {
            inputRange: [
                (this.idx - 1) * ScreenWidth,
                this.idx * ScreenWidth,
                (this.idx + 1) * ScreenWidth
            ],
            outputRange: [
                0, 1, 0
            ],
            extrapolate: Animated.Extrapolate.CLAMP
        })

        const scale = Animated.interpolate(this.scrollX, {
            inputRange: [
                (this.idx - 1) * ScreenWidth,
                this.idx * ScreenWidth,
                (this.idx + 1) * ScreenWidth
            ],
            outputRange: [
                0, 1, 0
            ],
            extrapolate: Animated.Extrapolate.CLAMP
        })

        const translateX = Animated.interpolate(this.scrollX, {
            inputRange: [
                (this.idx - 1) * ScreenWidth,
                this.idx * ScreenWidth,
                (this.idx + 1) * ScreenWidth
            ],
            outputRange: [
                -ScreenWidth, 0, -ScreenWidth
            ],
            extrapolate: Animated.Extrapolate.CLAMP
        })

        return (
            <Animated.View style={[styles.container, {opacity: opacity, transform: [{scale, translateX}]}]}>
                <BorderlessButton onPress={this._onPress}>
                    <Animated.View style={[styles.wrapper]}>
                        <FontAwesome name={iconName} color="#EC2727" style={[styles.iconStyle]}/>
                        <Text style={styles.textStyle}>{addString}</Text>
                    </Animated.View>
                </BorderlessButton>
            </Animated.View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        right: 0,
    },
    wrapper: {
        padding: 20,
    },
    iconStyle: {
        alignSelf: 'flex-end',
        fontSize: 20
    },
    textStyle: {
        fontWeight: 'bold',
        textAlign: 'right',
    }
})
