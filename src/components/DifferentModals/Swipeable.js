import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Modal from 'react-native-modal';


export default class Swipeable extends Component {

    state = {
        visibleModalId:null
    }


    renderModalContent = () => (
        <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi !</Text>
            <Button 
                onPress={() => this.setState({ visibleModal:null })}
                title="Close"
            />
        </View>
    )

    render(){
        return(
            <View style={styles.container}>
                <Button 
                    title="Swipeable"
                    onPress={() => this.setState({ visibleModal:'swipeable'})}
                />
                <Modal
                    isVisible={this.state.visibleModal === 'swipeable'}
                    onSwipeComplete={() => this.setState({ visibleModal:null })}
                    swipeDirection={['down','left','right','up']}
                >
                    {this.renderModalContent()}
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 1
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
    }
})