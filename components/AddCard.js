import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { addCardToDeck } from '../utils/api';
import { addCardToDeckAction } from '../actions';

class AddCard extends Component {

    static navigationOptions = () => {
        return { title: 'Add a card' }
    };

    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
        }
        this.addCard = this.addCard.bind(this);
    }

   addCard(deckTitle) {
       const card = { answer: this.state.answer, question: this.state.question };
       addCardToDeck(deckTitle, card);
       this.props.dispatch(addCardToDeckAction(deckTitle, card));
       this.setState({
           question: '',
           answer: '',
       });
   };

    render() {
        console.log(this.props)
        const { deckTitle } = this.props.navigation.state.params;
    
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.question}
                    multiline
                    style={styles.cardUserInput}
                    placeholder='Enter question here'
                    onChangeText={(question) => this.setState({ question} )}
                />
                <TextInput
                    value={this.state.answer}
                    multiline
                    style={styles.cardUserInput}
                    placeholder='Enter the answer to the question here'
                    onChangeText={(answer) => this.setState({ answer} )}
                />
                <TouchableOpacity 
                    style={styles.submitBtn}
                    onPress={() => this.addCard(deckTitle)}>
                    <Text style={styles.submitBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardUserInput: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 40,
        marginTop: 20,
        padding: 10,
        borderRadius: 7,
        height: 50,
        width: 250,
    },
    submitBtn: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 7,
        height: 45,
        width: 100,
        marginBottom: 40,
    },
    submitBtnText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },

});

export default connect()(AddCard);