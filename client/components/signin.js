import React from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { connect } from 'react-redux';
import { signin } from '../actions';
import { Constants, LinearGradient } from 'expo';

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Instagram</Text>
          <TextInput placeholder="전화번호, 사용자이름 또는 이메일" style={styles.input}
            onChangeText={(username) => this.setState({ username })}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize='none'
            borderRadius="10"
            value={this.state.username}
            />
          <TextInput placeholder="비밀번호" style={styles.input}
            onChangeText={(password) => this.setState({ password })}
            borderRadius="10"
            value={this.state.password}
            secureTextEntry={true} />
          <View style={styles.con}>
            <LinearGradient
              colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
              start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
              style={{ height: 48, width: 200, alignItems: 'center', justifyContent: 'center',borderRadius:10}}
            >
              <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                this.props.signin(this.state.username, this.state.password)}}
                disabled={!this.state.username || !this.state.password }>
                <Text style={styles.buttonText} >
                  로그인
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 50,
    fontStyle: 'italic'
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  button: {
    alignSelf: "stretch",
    // color: 'blue'
    // theme: dark
    // backgroundColor: "blue",
    // font: 'white'
  },
  input: {
    alignSelf: "stretch",
    height: 40,
    margin: 20,
    marginBottom: 5,
    marginTop: 5,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    padding: 5
  },
  con: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    marginTop: 30
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 200
  }
});

export default connect(null, { signin })(SignInScreen);