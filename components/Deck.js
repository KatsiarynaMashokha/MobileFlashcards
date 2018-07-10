import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Deck extends Component {

    static navigationOptions = ({ navigation }) => {
        return { title: navigation.state.params.deckTitle }
    }

    addCard = () => {
    }

    startQuiz = () => {
    }

    render() {
        const { deckTitle, cardsCount } = this.props.navigation.state.params;

        return (
            <View style={styles.container}> 
                <Text style={styles.deckTitle}>{deckTitle}</Text>
                <Text style={styles.cardNumber}>{cardsCount} cards</Text>
                <TouchableOpacity
                    style={styles.addCardBtn}
                    onPress={this.addCard}>
                    <Text style={styles.addCardText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.startQuizBtn}
                    onPress={this.startQuiz}>
                    <Text style={styles.startQuizText}>Start Quiz</Text>
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
    deckTitle: {
        fontSize: 40,
    },
    cardNumber: {
        color: 'gray',
        fontSize: 22,
        marginTop: 5,
    },
    addCardBtn: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 7,
        height: 45,
        width: 180,
        marginTop: 40,
    },
    startQuizBtn: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 7,
        height: 45,
        width: 180,
        marginTop: 40,
    },
    addCardText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    startQuizText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Deck;