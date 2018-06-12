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

import Btns from './buttons';
import Photos from './image_list';
import _ from 'lodash';

class profileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }
  
  static navigationOptions = {
    title: 'salyeon'//로그인 한 사람 아이디로 변경하기
  };
  componentDidMount() {
    console.log(this.props.auth,"머야 내 아이디 안넘어옴?")
    this.props.getProfile("adie");
    this.props.getInfo(this.props.auth);
  }
  // renderUsers() {
  //   if (this.props.getProfile) {
  //     return this.props.getProfile.map(pro => {
  //       return (
  //         <View style={styles.card} key={user.id}>
  //           <Text>{pro.name}</Text>
  //           <Text>{pro.username}</Text>
  //           <Text>{pro.intro}</Text>
  //           <Text>{pro.myUrl}</Text>
  //         </View>
  //       );
  //     });
  //   }
  // }
  render() {
    console.log(this.props.profile,"유저아이디가져오기")

    console.log(this.props.info,"유저정보 확인")
    // console.log(this.props.getProfile,"프로필")
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rowStyle}>
            <UserInfo posts={2} follower={20} following={24}/>
            {/* <Button
              title="프로필 수정"
              onPress={() => _showMoreApp}
            /> */}

            <Button onPress={() => this.props.navigation.push('Edit')} title="프로필수정" color="black"/>
          </View>
          <UserProfile name={this.props.info.username} intro={this.props.getProfile.intro} website={this.props.getProfile.myUrl}/>
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