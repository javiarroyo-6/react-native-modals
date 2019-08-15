import React, { Component } from 'react';
import { View, StyleSheet, Text , Button, ScrollView } from 'react-native';
import Modal from 'react-native-modal';


export default class Scrollable extends Component {

    state = { 
        visibleModalId:null
    }

    renderModalContent = () => (
        <View>
            <Text> Scrollable </Text>
            <Button 
                title="Close"
                onPress={() => this.setState({ visibleModal: null })}
/>
        </View>
    )

    handleOnScroll = event => {
        this.setState({
            scrollOffSet: event.nativeEvent.contentOffSet.y,
        });
    };

    handleScrollTo = p => {
        if(this.scrollViewRef){
            this.scrollViewRef.scrollTo(p);
        }
    };

    render(){
        return(
            <View style={styles.container}>
                <Button 
                    onPress={() => this.setState({visibleModal:'scrollable'})}
                    title="Scrollable"
                />
                <Modal
                    isVisible={this.state.visibleModal === 'scrollable'}
                    onSwipeComplete={() => this.setState({visibleModal:null })}
                    swipeDirection="down"
                    scrollTo={this.handleScrollTo}
                    scrollOffset={this.state.scrollOffSet}
                    scrollOffsetMax={400 -300 }
                    style={styles.bottomModal}
                >
                <View style={styles.scrollableModal}>
                    <ScrollView
                    ref={ref => (this.scrollViewRef = ref)}
                    onScroll={this.handleOnScroll}
                    scrollEventThrottle={16}
                    >
                    <View style={styles.scrollableModalContent1}>
                        <Text style={styles.scrollableModalText1}> Scroll me up </Text>
                    </View>
                    <View style={styles.scrollableModalContent2}>
                        <Text style={styles.scrollableModalContent2}> Same here</Text>
                    </View>
                    </ScrollView>
                </View>
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
    },
    bottomModal:{
        justifyContent:'flex-end',
        margin:0
    },
    scrollableModal:{
        height:300
    },
    scrollableModalContent1:{
        height:200,
        backgroundColor:'#87BBE0',
        alignItems:'center',
        justifyContent:'center'
    },
    scrollableModalText1:{
        fontSize:20,
        color:'white'
    },
    scrollableModalContent2:{
        height:200,
        backgroundColor:'#A9DCD3',
        alignItems:'center',
        justifyContent:'center'
    },
    scrollableModalText2:{
        fontSize:20,
        color:'white',
    }
})