import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../utils/api';
import { getDecksAction } from '../actions';

class Decks extends Component {
    componentDidMount() {
        getDecks().then(result => this.props.dispatch(getDecksAction(result)))
    }

    render() {
        let { decks } = this.props;
        return (
            <View style={styles.container}>
                {Object.keys(decks).length > 0 && Object.keys(decks).map((deck, index) => {
                    return (
                        <TouchableOpacity style={styles.deckRowWrapper} key={deck} onPress={() => this.props.navigation.navigate(
                            'Deck',
                            {
                                deckTitle: deck,
                            }
                        )}>
                            <Text style={styles.deckTitle}>{deck}</Text>
                            <Text style={styles.cardNumber}>{decks[deck].questions.length} {decks[deck].questions.length == 1 ? 'card' : 'cards'}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        );
    }
}

function mapStateToProps (decks) {
    return {
        decks
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deckTitle: {
        fontSize: 26,
    },
    cardNumber: {
        color: 'gray',
        fontSize: 14,
        textAlign: 'center',
    },
    deckRowWrapper: {
        margin: 20,
    }
})

export default connect(mapStateToProps)(Decks);