/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://github.com/react-native-picker/picker#readme
 * https://github.com/callstack/react-native-slider
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class PickerComponent extends Component {
  state = {
    country: 'korea',
    value: 50,
  };

  onCountryChange = (val, idx) => {
    this.setState({country: val});
  };

  sliderValueChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={{height: 40, width: 300}}
          value={this.state.value}
          minimumValue={0}
          maximumValue={100}
          onValueChange={this.sliderValueChange}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
          step={1}
        />
        <Text style={styles.input}>{this.state.value}</Text>
        <ActivityIndicator
          style={{paddingTop: 200}}
          size="large"
          color="green"
          animating="true"
        />
        <Picker
          style={{height: 50, width: 250}}
          selectedValue={this.state.country}
          onValueChange={this.onCountryChange}>
          <Picker.Item label="Korea" value="korea" />
          <Picker.Item label="Canada" value="canada" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
  },
});

export default PickerComponent;
