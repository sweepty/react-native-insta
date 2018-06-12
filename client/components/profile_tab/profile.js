import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  AsyncStorage,
  ScrollView
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { getInfo, getProfile } from '../../actions/index';
import UserInfo from './userInfo';
import UserProfile from './user_profile';

import Photos from './image_list';
import _ from 'lodash';

class profileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      intro: '',
      profileImg: '',
      myUrl: '',
      test: []

    }
  }
  
  static navigationOptions = {
    title: 'salyeon'//로그인 한 사람 아이디로 변경하기
  };
  componentDidMount() {
    this.props.getProfile(this.props.auth);
    this.props.getInfo(this.props.auth);
  }

  render() {
    console.log(this.props.info,"유저정보 확인")
    const arr = [];
    _.map(this.props.profile.Profile, pro => {
      arr.push(pro);
    })
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rowStyle}>
            <UserInfo posts={2} follower={20} following={24}/>
            <Button onPress={() => this.props.navigation.push('Edit')} title="프로필수정" color="black"/>
            <Button onPress={() => this._signOutAsync} title="프로필수정" color="black"/>
          </View>
          <UserProfile name={arr[2]} intro={arr[3]} website={arr[5]}/>
          <Photos />
        </View>
      </ScrollView>
    );
  }
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
    profile: state.profile
  };
}
export default connect(mapStateToProps, { getInfo, getProfile })(withNavigation(profileScreen));

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