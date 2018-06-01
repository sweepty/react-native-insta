import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './home';
import SearchScreen from './search';
import UploadScreen from './upload';
import HeartScreen from './heart';
import ProfileScreen from './profile';

export default createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SearchScreen,
  upload: UploadScreen,
  heart: HeartScreen,
  profile: ProfileScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
