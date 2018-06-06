import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import TabBar from './components/tab';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }
  }
  render() {
    return (
      <TabBar />
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
