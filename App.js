import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Default from './src/components/DifferentModals/Default'
import Question from './src/components/Question';
import Sliding from './src/components/DifferentModals/Sliding';
import Slow from './src/components/DifferentModals/Slow';
import Fancy from './src/components/DifferentModals/Fancy';
import Bottom from './src/components/DifferentModals/Bottom';
import BackDropPress from './src/components/DifferentModals/BackDropPress';
import Swipeable from './src/components/DifferentModals/Swipeable';
import Scrollable from './src/components/DifferentModals/Scrollable';



export default class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Scrollable />
      </View> 
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop:400
  },
});
