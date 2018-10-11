/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/pages/Login';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#C2185B"
        barStyle="light-content"
      />
      <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#D81B60',
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center',
  },
});
