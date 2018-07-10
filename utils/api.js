import { AsyncStorage } from 'react-native';
import { FLASHCARDS_STORAGE_KEY } from '../constants/apiConstants';

export const initialData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
};

export const setupInitialData = () => {
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData));

    return initialData;
}

export const getDecks = () => {

    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(result => result ? JSON.parse(result) : initialData)
}

// export const getDecks = () => {
  
//     return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(result => {
//     return result ? JSON.parse(result) : initialData;
//   })
// }

export const getDeck = deckId => {

    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(result => {

    });
}

export const saveDeckTitle = deck => {

    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(deck));
}

export const addCardToDeck = (deckTitle, card) => {

}