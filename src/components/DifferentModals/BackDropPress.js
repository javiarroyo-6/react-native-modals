import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet, 
    Button
} from "react-native";
import Modal from 'react-native-modal'

export default class BackDropPress extends Component {

    state = {
        visibleModalId:null
    }

    renderModalContent = () => (
        <View style={styles.content}>
            <Text style={styles.contentTitle}> Hi! </Text>
            <Button 
                title="Close"
                onPress={() => this.setState({ visibleModal: null })}
            />
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <Button 
                    title="backdrop"
                    onPress={() => this.setState({ visibleModal: 'backdrop' })}
                />
                <Modal
                    isVisible={this.state.visibleModal === 'backdrop'} 
                    onBackdropPress={() => this.setState({ visibleModal: null })}
                >
                    {this.renderModalContent()}
                </Modal>
            </View>
        );
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