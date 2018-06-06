import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PhotoList from './search_list';
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
        <ScrollView>
          <View style={styles.container}>
            <TextInput
              style={styles.search}
              onChangeText={(text) => this.setState({text})}
              placeholder="검색"
              value={this.state.text}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10
  },
  search: {
    height: 30, width: 100 +"%", borderRadius: 10, backgroundColor:'whitesmoke'
  }
});
