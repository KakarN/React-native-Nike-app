import React from 'react'
import {View, StyleSheet, Text, Dimensions} from 'react-native'
import Animated, {Easing} from 'react-native-reanimated'
import {FontAwesome} from '@expo/vector-icons';

const {width: ScreenWidth} = Dimensions.get('window')

const AnimatedIcon = Animated.createAnimatedComponent(FontAwesome)

export default class AddWishButton extends React.Component {
    constructor(props) {
        super(props)
        this.opacity = new Animated.Value(0.8);
    }

    render() {
        let shoe = this.props.listData[0]

        switch (this.props.currentScrollPosition) {
            case 0:
                shoe = this.props.listData[0]
                break
            case ScreenWidth * 1:
                shoe = this.props.listData[1]
                break
            case ScreenWidth * 2:
                shoe = this.props.listData[2]
                break
            default :
                console.log('default')
                break
        }

        if (shoe.isWished) {
            this._config = {
                damping: 1,
                mass: 1,
                stiffness: 50,
                overshootClamping: true,
                restSpeedThreshold: 0.001,
                restDisplacementThreshold: 0.001,
                // toValue: new Value(0),
                toValue: 1
            };
            Animated.spring(this.opacity, this._config).start();
        } else {
            this._config = {
                damping: 1,
                mass: 1,
                stiffness: 50,
                overshootClamping: true,
                restSpeedThreshold: 0.001,
                restDisplacementThreshold: 0.001,
                // toValue: new Value(0),
                toValue: 0.8
            };
            Animated.spring(this.opacity, this._config).start();
        }

        return (
            <Animated.View style={[styles.container, {
                fontSize: 14,
                opacity: this.opacity,
                transform: [{scale: this.opacity}]
            }]}>
                <AnimatedIcon name="heart-o" color="#EC2727" style={[styles.iconStyle, {
                    fontSize: 24,
                    opacity: this.opacity,
                    transform: [{scale: this.opacity}]
                }]}/>
                <Text style={styles.textStyle}>Add to wish list</Text>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f9f9f9',
        alignSelf: 'flex-end',
        paddingTop: 20,
        paddingHorizontal: 40,
    },
    iconStyle: {
        alignSelf: 'flex-end',
    },
    textStyle: {
        fontWeight: 'bold'
    }
})
