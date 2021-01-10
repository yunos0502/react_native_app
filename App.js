/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './src/header';

class App extends Component {
  state = {
    appName: 'My First App',
  };
  render() {
    return (
      <View style={styles.mainView}>
        {/* <Header name={this.state.appName} /> */}
        <Text style={styles.mainText} onPress={() => alert('text touch event')}>
          hello world
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: 'red',
    fontSize: 20,
  },
});

export default App;
