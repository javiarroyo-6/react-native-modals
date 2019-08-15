import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';


export default class Slow extends Component {

    state = { 
        visibleModalId: null,
    };

    renderModalContent = () => ( 
        <View style={styles.content}>
            <Text style={styles.contentTitle}> Hi !</Text>
            <Button 
                onPress={() => this.setState({ visibleModal: null })}
                title="Close"
            />
        </View>
    );


    render(){
        return(
            <View style={styles.container}>
                <Button 
                    onPress={() => this.setState({ visibleModal: 'slow'})}
                    title="Slow"
                />
                <Modal 
                isVisible={this.state.visibleModal === 'slow'}
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropTransitionInTiming={800}
                backdropTransitionOutTiming={800}
                >
                    {this.renderModalContent()}
                </Modal>
            </View>
        )
    }
}

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
