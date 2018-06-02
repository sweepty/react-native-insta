import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Header from '../header';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="instagram" style={styles.viewStyle}/>
        <View>
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
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
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
  },
  textStyle: {
    fontSize: 20
  }
});
