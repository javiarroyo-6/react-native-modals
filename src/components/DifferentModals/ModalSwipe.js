import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';


export default class ModalSwipe extends Component {

    state = { 
        visibleModalId:true
    }

    render(){
        return(
            <View style={styles.container}>
                <Modal
                    isVisible={this.state.visibleModal}
                    onSwipeComplete={() => this.setState({ visibleModal:false})}
                    swipeDirection={['left']}
                >
                    <View style={styles.content}>
                        <Text> Swipeable modal</Text>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignContent:'center',
        flex:1
    },
    content:{
        flex:1
    }
})