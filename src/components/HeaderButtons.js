import React from 'react'
import {withNavigation} from 'react-navigation';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import {BorderlessButton} from 'react-native-gesture-handler'


import Styles from '../contants/Styles'

const CartButtonComponent = props => {
    const _onPress = () => {
        props.navigation.navigate('ShoppingCart')
    }

    return (
        <BorderlessButton style={Styles.HeaderButtonStyle} onPress={_onPress}>
            <Ionicons name={'md-cart'} size={32} style={Styles.HeaderIconStyle}/>
        </BorderlessButton>
    )
}

export const CartButton = withNavigation(CartButtonComponent)

export const MenuButtonComponent = props => {
    // console.log('right props', props)
    const _onPress = () => {
        props.navigation.toggleDrawer();
    }
    return (
        <BorderlessButton style={Styles.HeaderButtonStyle} onPress={_onPress}>
            <MaterialIcons name="subject" size={32} style={Styles.HeaderIconStyle}/>
        </BorderlessButton>
    )
}

export const MenuButton = withNavigation(MenuButtonComponent)
