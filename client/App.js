import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
// import HomeScreen from './components/home';
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
