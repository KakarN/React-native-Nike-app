import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Constants} from 'expo';

import Navigator from './src/navigation'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Navigator/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        backgroundColor: "red",
        height: Constants.statusBarHeight,
    },
});
