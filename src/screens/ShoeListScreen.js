import React from 'react'
import {View, StyleSheet, Text, ImageBackground, Dimensions} from 'react-native'
import Animated from 'react-native-reanimated'
import {State} from "react-native-gesture-handler";

import WishButton from '../components/WishButton'
import Item from '../components/Item'
import BuyButton from '../components/BuyButton'
import IndicatorItem from "../components/IndicatorItem";

const {width: ScreenWidth} = Dimensions.get('window')

export default class ListScreen extends React.Component {
    state = {
        listData: [
            {
                id: 1,
                title: 'Nike Air Jordan 1 Retro',
                url: require('../../assets/images/red-shoe.png'),
                price: '$ 2400.00',
                isWished: false
            },
            {
                id: 2,
                title: 'Air Jordan 19 Retro',
                url: require('../../assets/images/white-shoe.png'),
                price: '$ 1900.00',
                isWished: true
            },
            {
                id: 3,
                title: 'Air Jordan High 1 Zip',
                url: require('../../assets/images/black-shoe.png'),
                price: '$ 2750.00',
                isWished: false
            }
        ]
    }

    myScrollView = React.createRef()

    scrollX = new Animated.Value(0)

    gestureState = new Animated.Value(-1)

    _onScroll = Animated.event([
        {
            nativeEvent: {
                contentOffset: {
                    x: this.scrollX
                }
            }
        }
    ])

    onStateChange = Animated.event([{
        nativeEvent: {
            state: this.gestureState,
        },
    }]);

    scrollToIndex = index => {
        const itemOnX = index * ScreenWidth
        this.myScrollView.getNode().scrollTo({x: itemOnX, y: 0, animated: true})
    }

    updateWishList = index => {
        const stateCopy = Object.assign({}, this.state);
        stateCopy.listData = stateCopy.listData.slice();
        stateCopy.listData[index] = Object.assign({}, stateCopy.listData[index]);
        stateCopy.listData[index].isWished = !stateCopy.listData[index].isWished;
        this.setState(stateCopy);
    }

    render() {

        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/images/nike-bg.png')}
                    style={styles.backgroundStyle} imageStyle={styles.imageStyle}
                >
                    <Animated.ScrollView
                        ref={c => (this.myScrollView = c)}
                        style={styles.scrollStyle}
                        contentContainerStyle={styles.contentContainerStyle}
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        overScrollMode={'never'}
                        onScroll={this._onScroll}
                        onHandlerStateChange={this.onStateChange}
                    >
                        {this.state.listData.map((shoe, idx) => (
                            <Item key={idx} idx={idx} shoe={shoe} scrollX={this.scrollX}/>
                        ))}
                    </Animated.ScrollView>
                </ImageBackground>
                <Animated.View style={styles.indicatorWrapper}>
                    {this.state.listData.map((item, index, arr) => (
                        <IndicatorItem
                            key={index}
                            idx={index}
                            scrollX={this.scrollX}
                            totalItem={arr.length}
                            scrollToIndex={this.scrollToIndex}
                        />
                    ))}
                </Animated.View>
                <BuyButton/>
                {
                    this.state.listData.map((shoe, idx) => (
                        <WishButton
                            key={idx}
                            idx={idx}
                            shoe={shoe}
                            scrollX={this.scrollX}
                            updateWishList={this.updateWishList}
                        />
                    ))
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wishWrapper: {
        backgroundColor: 'rgba(30, 20, 10, 0.5)',
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
    },
    backgroundStyle: {
        flex: 1,
        // borderWidth: 2,
        borderColor: 'red',
    },
    imageStyle: {
        resizeMode: 'contain'
    },
    scrollStyle: {
        // backgroundColor: 'red',
    },
    contentContainerStyle: {
        // backgroundColor: 'green',
    },
    indicatorWrapper: {
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
})
