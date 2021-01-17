/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://reactnative.dev/docs/textinput
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

class Input extends Component {
  state = {
    myTextInput: '',
  };

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true} // 개행
          maxLength={100} // 최대 입력 글자 갯수
          autoCapitalize={'none'} // 대문자 자동 수정
          editable={false} // disabled
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default Input;
