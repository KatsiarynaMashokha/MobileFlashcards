import * as actions from '../constants/ActionTypes';

function decks(state = {}, action) {
    switch(action.type) {
        case actions.GET_DECKS:

            return {
                ...state,
                ...action.result
            };
        case actions.ADD_DECK:
        
            return {
                ...state,
                ...action.result
            };
        case actions.ADD_CARD_TO_DECK:
            const { card, deckTitle } = action.result;

            return {
                ...state,
                [deckTitle] : {
                    ...state[deckTitle],
                    questions : state[deckTitle].questions.concat(card),
                }
            };
        default:

            return state;
    }
}

export default decks;