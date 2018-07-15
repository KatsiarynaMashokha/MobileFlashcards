import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { addDeckAction } from '../actions';
import { saveDeckTitle } from '../utils/api';

class AddDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            questions: [],
        };
        this.addDeck = this.addDeck.bind(this);
    }

    addDeck() {
        if(this.state.title.length == 0) {
            return Alert.alert(
                'Alert',
                'Deck title should not be empty',
              )
        } else if(this.props.decks[this.state.title]) {
            return Alert.alert(
                'Alert',
                'There is already a deck with the same title exists. Please name your deck differently',
              )
        }
        const deck = {[this.state.title] : {
            ...this.state
        }};
        saveDeckTitle(deck);
        this.props.dispatch(addDeckAction(deck));
        this.setState({
            title: ''
        });
    }

    render() {
        
        return (
            <View style={styles.container}>
                <Text style={styles.deckTitleQuestion}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.deckUserInput}
                    onChangeText={(text) => this.setState({title: text})}
                    value={this.state.title}
                    placeholder={'Deck title'}
                />
                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={this.addDeck}>
                    <Text style={styles.submitBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deckUserInput: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 40,
        marginTop: 20,
        padding: 10,
        borderRadius: 7,
        height: 40,
        width: 200,
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
    deckTitleQuestion: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
    },
});

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(AddDeck);