import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import Platform from 'react-native';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import reducer from './reducers/index';
import Decks from './components/Decks';
import AddDeck from './components/AddDeck';

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: () => <Ionicons name='ios-albums' size={30} color='thistle'/>
    }
  },
  NewDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: () => <Ionicons name='ios-add-circle' size={30} color='thistle'/>
    }
  },
},
{
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    labelStyle: { 
      fontSize: 14,
      fontWeight: 'bold',
    },
    activeTintColor: Platform.OS === 'ios' ? 'purple' : 'white',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? 'white' : 'purple',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    },
  }
}
);

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
