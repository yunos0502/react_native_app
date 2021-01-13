/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://reactnative.dev/docs/scrollview
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';

class App extends Component {
  state = {
    appName: 'My First App',
    random: [36, 999],
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState((prevState) => {
      return {
        random: [...prevState.random, randomNum],
      };
    });
  };

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, index) => {
      return position !== index;
    });

    this.setState({
      random: newArray,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        {/* <Header name={this.state.appName} />
        <View>
          <Text
            style={styles.mainText}
            onPress={() => alert('text touch event')}>
            Hello World
          </Text>
        </View>
        <Generator add={this.onAddRandomNum} />
        <ScrollView
          style={{width: '100%'}}
          // onMomentumScrollBegin={() => alert('begin')} // Called when the momentum scroll starts
          // onMomentumScrollEnd={() => alert('end')} // Called when the momentum scroll ends
          // onScroll={() => alert('scrolling')} // Fires at most once per frame during scrolling.
          // onContentSizeChange={(width, height) => alert(height)} // Called when scrollable content view of the ScrollView changes.
          bounces={true} // The end of the content if the content is larger then the scroll view along the axis of the scroll direction.
        >
          <NumList num={this.state.random} delete={this.onNumDelete} />
        </ScrollView> */}

        <Input />
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
    // justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
});

export default App;
