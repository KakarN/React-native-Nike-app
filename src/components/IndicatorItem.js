import React from 'react'
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native'
import Animated from 'react-native-reanimated'

const {width: ScreenWidth} = Dimensions.get('window')

export default class IndicatorItem extends React.Component {
    constructor(props) {
        super(props)
        this.idx = this.props.idx
        this.scrollX = this.props.scrollX
        this.totalItem = this.props.totalItem
    }

    _onPress = () => {
        this.props.scrollToIndex(this.idx)
    }

    render() {
        const scale = Animated.interpolate(this.scrollX, {
            inputRange: [
                (this.idx - 1) * ScreenWidth,
                this.idx * ScreenWidth,
                (this.idx + 1) * ScreenWidth
            ],
            outputRange: [0.5, 1.2, 0.5],
            extrapolate: Animated.Extrapolate.CLAMP
        })

        const opacity = Animated.interpolate(this.scrollX, {
            inputRange: [
                (this.idx - 1) * ScreenWidth, // (0 - 1) * 360 = -1 * 360 = -360
                this.idx * ScreenWidth, // 0 * 360 = 0
                (this.idx + 1) * ScreenWidth // (0 + 1) * 360 = 1 * 360 = 360
            ],
            outputRange: [
                0.3,
                1,
                0.3
            ],
            extrapolate: Animated.Extrapolate.CLAMP
        })


        return (
            <TouchableWithoutFeedback onPress={this._onPress}>
                <View style={{padding: 8, margin: 5}}>
                    <Animated.View
                        style={[
                            styles.roundStyle, {
                                backgroundColor: '#5588f9',
                                opacity: opacity,
                                transform: [
                                    {scale: scale}
                                ]
                            }
                        ]}
                    />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    roundStyle: {
        width: 16,
        height: 16,
        borderRadius: 16 / 2,
    }
})
