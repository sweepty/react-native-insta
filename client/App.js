import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
const composeStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import TabBar from './components/tab';
import NavigationService from './navigation_service';
import AppNavigator from './components/tab';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={composeStoreWithMiddleware(reducers)}>
        <AppNavigator ref={navigationRef => {
          NavigationService.setTopLevelNavigator(navigationRef);
        }} />
      </Provider>
    );
  }
}