import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, KeyboardAvoidingView} from 'react-native';
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
    // this.state = {

    // }
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
