import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import UserInfo from './userInfo';
class profileScreen extends React.Component {
  static navigationOptions = {
    title: 'salyeon',//로그인 한 사람 아이디로 변경하기
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
        <UserInfo posts={2} follower={20} following={24}/>
      </View>
    );
  }
}
export default createStackNavigator({
  Profile: {
    screen: profileScreen
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  imageStyle: {
    width: 90, 
    height: 90, 
    borderRadius: 45,
    margin: 15,
    // justifyContent: "flex-start"
  },
});
