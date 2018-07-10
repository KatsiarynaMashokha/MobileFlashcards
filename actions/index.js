import * as actions from '../constants/ActionTypes';

export function getDecksAction(decks) {

    return {
        type: actions.GET_DECKS,
        result: decks
    }
}

export function addDeckAction(deck) {

    return {
        type: actions.ADD_DECK,
        result: deck
    }
}

export function addCardToDeck(card, deckId) {
    
    return {
        type: actions.ADD_CARD_TO_DECK,
        result: { card, deckId }
    }
}

export function getCardsForDeck(deckId) {
    
    return {
        type: actions.GET_CARDS_FOR_DECK,
        result: { }
    }
}