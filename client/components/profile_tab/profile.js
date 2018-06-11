import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { fetchUsers, getInfo } from '../../actions/index';


class profileScreen extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    // this.props.getInfo(); 
  }
  renderUsers() {
    console.log(this.props,"dkdkdk")
    if (this.props.users) {
      return this.props.users.map(user => {
        return (
          <View style={styles.card} key={user.id}>
            <Text>{user.username}</Text>
          </View>
        );
      });
    }
  }
  render() {
    console.log(this.props.info,"인포확인")
    console.log(this.props.users,"인포확인")
    return (
      <View style={styles.container}>
        <View style={styles.users}>
          {this.renderUsers()}
        </View>
        {/* <Text>{this.props.info}</Text> */}
      </View>
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
  };
}
export default connect(mapStateToProps, { fetchUsers, getInfo })(profileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  users: {
    flex: 1,
    alignSelf: "stretch"
  },
  card: {
    alignSelf: "stretch",
    padding: 30,
    borderBottomWidth: 5,
    borderBottomColor: '#EEE'
  }
});


// import React from 'react';
// import {
//   View,
//   Button,
//   Text,
//   StyleSheet,
//   AsyncStorage,
//   ScrollView
// } from 'react-native';
// import { connect } from 'react-redux';
// import { fetchUsers, getInfo } from '../../actions';
// import UserInfo from './userInfo';
// import UserProfile from './user_profile';
// import Btns from './buttons';
// import Photos from './image_list';
// import _ from 'lodash';
// import axios from 'axios';
// class profileScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: this.props.user
//     }
//   }
//   _keyExtractor = (item, index) => item.id;
//     static navigationOptions = {
//     title: 'salyeon',//로그인 한 사람 아이디로 변경하기
//   };
//   componentDidMount() {
//     // this.props.fetchUsers();
//     this.props.getInfo("adie");
//   }
//   // renderUsers() {
//   //   if (this.props.users) {
//   //     return _.map(this.props.users, user => {
//   //       return (
//   //         // <Text key={user.username}>{user.username}</Text>
//   //         <View style={styles.card} keyExtractor={this._keyExtractor}>
//   //           <Text>{user.username}</Text>
//   //         </View>
//   //       );
//   //     });
//   //   }
//   // }
//   // render() {
//   //   console.log(this.state,"유저네임ㅎㅎㅎ")
//   //   console.log(this.props.users,"유저님 제발요")
//   //   console.log(this.username)
//   //   return (
//   //     <ScrollView>
//   //       <View style={styles.container}>
//   //         <View style={styles.rowStyle}>
//   //           <UserInfo posts={2} follower={20} following={24}/>
//   //           <Btns />
//   //         </View>
//   //         <UserProfile name={"이승연"} intro={"하이하이염"} website={'https://github.com/facebook/react-native'}/>
//   //         <Photos />
//   //       </View>
//   //      </ScrollView>
//   //     // <View style={styles.container}>
//   //     //   <View style={styles.users}>
//   //     //     {this.renderUsers()}
//   //     //   </View>
//   //     // </View>
//   //   );
//     renderUsers() {
//       if (this.props.user) {
//         return _.map(this.props.user, user => {
//           return (
//             <View style={styles.card} key={user.id}>
//               <Text>{user.username}</Text>
//             </View>
//           );
//         });
//       }
//     }
//     render() {
//       // const myname = AsyncStorage.getItem('username');
//       // console.log(myname,"아이디이이ㅣ이")
//       return (
//         <View style={styles.container}>
//           <View style={styles.rowStyle}>
//             {this.renderUsers()}
//           </View>
//         </View>
//       );
//     }

//   }
//   _showMoreApp = () => {
//     this.props.navigation.navigate('Other');
//   };

//   _signOutAsync = async () => {
//     await AsyncStorage.clear();
//     this.props.navigation.navigate('Auth');
//   };

// function mapStateToProps(state) {
//   console.log(state.users,"스테이트확인")
//   return { 
//     users: state.users.users,
//     info: state.users.info 
//   };
// }
// export default connect(mapStateToProps, { fetchUsers, getInfo })(profileScreen);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: "flex-start",
//     flexDirection: "column",
//   },
//   rowStyle: {
//     flexDirection: "column",
//     flex: 5,
//     justifyContent: "flex-start",
//     alignItems: "center"
//   }
// });
