import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  AsyncStorage,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { getInfo, getProfile } from '../../actions/index';
import UserInfo from './userInfo';
import UserProfile from './user_profile';
import Btns from './buttons';
import Photos from './image_list';
import _ from 'lodash';

class profileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  static navigationOptions = {
    title: `good`//로그인 한 사람 아이디로 변경하기
  };
  componentDidMount() {
    this.props.getInfo();
    this.props.getProfile();
  }
  renderUsers() {
    console.log(this.props.info,"dkdkdk")
    console.log(this.props,"뭐있나확인")
    if (this.props.info) {
      return this.props.info.map(user => {
        return (
          <View style={styles.card} key={user.id}>
            <Text>{user.username}</Text>
            <Text>{user.content}</Text>
            <Text>{user.image}</Text>
          </View>
        );
      });
    }
  }
  render() {
    console.log(this.props.info,"인포확인")
    console.log(this.props.users,"인포확인")
    console.log(this.props.auth,"유저네임ㅎㅎㅎ")
    console.log(this.props.getProfile,"프로필")
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rowStyle}>
            <UserInfo posts={2} follower={20} following={24}/>
            <Btns />
          </View>
          <UserProfile name={"이승연"} intro={"하이하이염"} website={'https://github.com/facebook/react-native'}/>
          {/* {this.renderUsers()} */}
          <Photos />
        </View>
      </ScrollView>

      // <View style={styles.container}>
      //   <View style={styles.users}>
      //     {this.renderUsers()}
      //   </View>
      //   {/* <Text>{this.props.info}</Text> */}
      // </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

function mapStateToProps(state) {
  return { 
    users: state.users,
    info: state.info,
    auth: state.auth,
    getProfile: state.getProfile
  };
}
export default connect(mapStateToProps, { getInfo, getProfile })(profileScreen);

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