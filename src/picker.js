/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://github.com/react-native-picker/picker#readme
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class PickerComponent extends Component {
  state = {
    country: 'korea',
  };

  onCountryChange = (val, idx) => {
    this.setState({country: val});
  };

  render() {
    return (
      <View style={styles.container}>
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
});

export default PickerComponent;
