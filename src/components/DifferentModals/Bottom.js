import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Modal from 'react-native-modal';

class Bottom extends Component {
  state = {
    visibleModalId: null
  };

  renderModalContent = () => (
    <View style={styles.content}>
      <Text style={styles.content}> Bottom Half </Text>
      <Button onPress={() => this.setState({ visibleModal: null })} title="Close" />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Button title="Bottom" onPress={() => this.setState({ visibleModal: 'bottom' })} />
        <Modal
          isVisible={this.state.visibleModal === 'bottom'}
          style={styles.bottomModal}
          onSwipeComplete={() => this.setState({ visibleModal: null })}
          swipeDirection={['up', 'down', 'left', 'right']}
        >
          {this.renderModalContent()}
        </Modal>
      </View>
    );
  }
}
export default Bottom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  }
});
