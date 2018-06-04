import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
          <TextInput
            style={{height: 30, width: 90 +"%", borderRadius: 10, backgroundColor:'whitesmoke'}}
            onChangeText={(text) => this.setState({text})}
            placeholder="검색"
            value={this.state.text}
          />
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
});
