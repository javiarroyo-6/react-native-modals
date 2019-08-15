import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Modal from 'react-native-modal';

export default class Example extends Component {
  state = {
    visibleModalId: null,
  };

  renderModalContent = () => (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>Hi 👋!</Text>
      <Button
        onPress={() => this.setState({ visibleModalId: null })}
        title="Close"
      />
    </View>
  );


  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.setState({ visibleModalId: 'sliding' })}
          title="Default"
        />
         <Modal 
         isVisible={this.state.visibleModal === 'sliding'}
         animationIn="slideInRight"
         animationOut="slideOutLeft"
         >
          {this.renderModalContent()}
        </Modal>
    </View>
    )
  }
}

//isVisible is a property that is mandatory 



const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        backgroundColor:'white',
        alignItems:'center',
        flex:1 
    },
    content:{
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    contentTitle:{
        fontSize:20,
        marginBottom:12 
    }
})