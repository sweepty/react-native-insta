import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { getInfo, getProfile, fetchMyPost } from '../../actions/index';
import UserInfo from './userInfo';
import UserProfile from './user_profile';

import Photos from './image_list';
import _ from 'lodash';

class profileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      // intro: '',
      // profileImg: '',
      // myUrl: '',
      // test: []

    }
  }
  _keyExtractor = (item, index) => index.toString();
  static navigationOptions = {
    title: 'salyeon'//로그인 한 사람 아이디로 변경하기
  };

  componentDidMount() {
    this.props.getProfile(this.props.auth);
    this.props.getInfo(this.props.auth)
    this.props.fetchMyPost(this.props.auth);
  }

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      // selected={!!this.state.selected.get(item.id)}
      title={item.id}
    />
  );

  render() {
    console.log(this.props.info,"유저정보 확인")
    console.log(this.props.mypost,"내   글    확인")
    const arr = [];
    const arr2 = [];
    const myPosts = [];
    _.map(this.props.profile.Profile, pro => {
      arr.push(pro);
    })
    _.map(this.props.mypost.rows, my => {
      arr2.push(my.Posts);
    })
    {_.map(arr2[0], aa => {
      // console.log(aa.content,"꾸엥");
      myPosts.push(aa);
      // <Text>{aa.content}</Text>
    })}
    console.log(myPosts,"젭알");
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rowStyle}>
            <UserInfo posts={this.props.mypost.count} follower={20} following={24}/>
            <View style={styles.colBtn}>
              <Button onPress={() => this.props.navigation.push('Edit')} title="프로필수정" color="black"/>
              <Button onPress={this._signOutAsync} title="로그아웃" color="red"/>
            </View>
          </View>
          <UserProfile name={arr[2]} intro={arr[3]} website={arr[5]}/>
          {/* <Photos /> */}
          <View style={styles.postList}>
            <FlatList
              data={myPosts}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) =>
              <View key={item.id} style={styles.listItem}>
                {/* <Image style={styles.imageStyle} source={require('../../images/otter.png')}/> */}
                <Text style={styles.postStyle}>{item.content}</Text>
                {/* <Text style={styles.postStyle}>{item.createdAt}</Text> */}
              </View>
          }/>
          </View>
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
    profile: state.profile,
    mypost: state.mypost
  };
}
export default connect(mapStateToProps, { getInfo, getProfile, fetchMyPost })(profileScreen);

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
  },
  colBtn: {
    flex: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "center",
  },
  postStyle: {
    fontSize: 15
  },
  imageStyle: {
    width: 33 + "%", 
    height: 120,
    margin: 1,
    justifyContent: "flex-start"
  },
  postList: {
    margin: 10
  }
});