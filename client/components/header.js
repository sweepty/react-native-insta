import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SearchScreen,
  // heart: HeartScreen,
  // profile: profileScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
