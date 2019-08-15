import React, { Component } from 'react';
import { View , StyleSheet , Text, TouchableOpacity, SafeAreaView } from 'react-native';


//Counter Application: Only needs to be increase and decrease the text
// increase and decrease need to be functions 
// state needs to hold the counter state which will be set at zero 
// display on App.js



class Counter extends Component {

    state = {
        counter: 0
    }
    
    increaseCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decreaseCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }


    render(){
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.increaseCounter()}>
                        <Text> Increase </Text>
                    </TouchableOpacity>
                    <Text> {this.state.counter} </Text>
                    <TouchableOpacity onPress={() => this.decreaseCounter()} >
                        <Text> Decrease </Text>
                    </TouchableOpacity>
                </View>
              </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'row'
    }
})

export default Counter ;