import React, { Component } from 'react';
import { View, Text, StyleSheet , Button } from 'react-native'
import Modal from 'react-native-modal';


export default class Fancy extends Component {

    state = { 
        visibleModalId: null
    }

    renderModalContent = () => (
        <View style = {styles.content}>
            <Text style={styles.contentTitle}> Fancy! </Text>
            <Button 
                onPress={() => this.setState({ visibleModal: null })}
                title="Close it"
            />
        </View>
    )

    render(){
        return(
            <View style={styles.container}>
                <Button 
                    title="Fancy"
                    onPress={() => this.setState({ visibleModal:'fancy'})}
                />
               <Modal 
                isVisible={this.state.visibleModal === 'fancy'}
                backdropColor="#B4B3DB"
                backdropOpacity={0.8}
                animationIn="swing"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}
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
