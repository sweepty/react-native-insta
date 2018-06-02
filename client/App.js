import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import TabBar from './components/tab';

export default class App extends React.Component {
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
