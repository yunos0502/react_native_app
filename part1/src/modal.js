/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Modal, Button, Text} from 'react-native';

class PickerComponent extends Component {
  state = {
    modal: false,
  };

  handleModal = () => {
    this.setState({
      modal: this.state.modal ? false : true,
    });
  };

  render() {
    return (
      <View style={{width: '100%'}}>
        <Button title="open modal" onPress={this.handleModal} />
        <Modal
          visible={this.state.modal}
          animationType={'slide'} // none, slide, fade
          onShow={() => alert('Warning')}>
          <View style={{marginTop: 60, backgroundColor: 'red'}}>
            <Text>This is modal content</Text>
          </View>
          <Button title="Go Back" onPress={this.handleModal} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default PickerComponent;
