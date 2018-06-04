import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import UserInfo from './userInfo';
import UserProfile from './user_profile';
import Btns from './buttons';
import Photos from './image_list';
class profileScreen extends React.Component {
  static navigationOptions = {
    title: 'salyeon',//로그인 한 사람 아이디로 변경하기
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rowStyle}>
            <UserInfo posts={2} follower={20} following={24}/>
            <Btns />
          </View>
          <UserProfile name={"이승연"} intro={"하이하이염"} website={'https://github.com/facebook/react-native'}/>
          <Photos />
        </View>
      </ScrollView>
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
    flexDirection: "column",
  },
  rowStyle: {
    flexDirection: "column",
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
