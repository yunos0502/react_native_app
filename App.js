/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://picsum.photos/
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  Text,
  Image,
} from 'react-native';

import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Hodu from './assets/images/hodu.jpg';

class App extends Component {
  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd'],
  };

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event,
    });
  };

  onAddTextInput = () => {
    this.setState((prevState) => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput],
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        {/*  */}
        <Image style={styles.image} source={Hodu} resizeMode="contain" />
        {/*  */}
        <Image
          style={styles.image}
          source={{uri: 'https://picsum.photos/id/237/200/300'}}
          resizeMode="contain"
          onLoadEnd={() => alert('image Loaded')}
        />
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
    color: 'white',
    padding: 20,
    margin: 20,
    backgroundColor: 'orange',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 500,
  },
});

export default App;
