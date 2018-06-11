import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { getInfo } from '../../actions/index';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class editProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topid: 'topdid'
    }
  }
  static navigationOptions = {
    title: '프로필 수정'
  };
  componentDidMount() {
    this.props.getInfo(); 
  }
  renderUserInfo() {
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
    console.log(this.props.auth,"유저네임ㅎㅎㅎ")
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rowStyle}>
            <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
          </View>
          {this.renderUserInfo()}
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
    // users: state.users,
    info: state.info,
    auth: state.auth
  };
}
export default connect(mapStateToProps, { getInfo })(editProfile);

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