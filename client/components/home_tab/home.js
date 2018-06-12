import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList} from 'react-native';
import UserInfo from '../list/userInfo';
import Content from '../list/content';
import { connect } from 'react-redux';
import { fetchPost, getInfo } from '../../actions';
class HomeScreen extends Component {

  static navigationOptions = {
    title: 'instagram',
  };
  componentDidMount() {
    this.props.fetchPost();
  }
  // _keyExtractor = (item, index) => item.id;
  _keyExtractor = (item, index) => index.toString();
  renderItem(item) {
    return (
      <ListItem 
        key={item.index} 
        id={item.index} 
        item={item.item} 
        onToggle={this.onItemToggle} />
    );
      
  }
  render() {
    console.log(this.props.posts,'글 목록 찾아욥')
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          // refreshing={true}
          // onRefresh={fetchUsers()}
          style={styles.listView}
          keyExtractor={this._keyExtractor}
          data = {this.props.posts}
          renderItem={({item}) =>
        
            <View key={item.id} style={styles.listItem}>
              <UserInfo id={item.User.id} username={item.User.username}/>
              <Content id={item.id} username={item.User.username} content={item.content} />
            </View> 
          }
        />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return { 
    users: state.users,
    info: state.info,
    auth: state.auth,
    posts: state.posts,
    
  };
}
export default connect(mapStateToProps, { fetchPost, getInfo })(HomeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100 + "%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewStyle: {
    width: 100 + "%",
    justifyContent: "center",
    padding: 40,
    height: 100,
    // position: "relative",
    flex: 1,
  },
  listView: {
    width: 100 + "%",
    // backgroundColor: "slateblue",
    margin: 10
  },
  listItem: {
    marginBottom: 20
  }
});


// import React from 'react';
// import {
//   View,
//   Button,
//   Text,
//   StyleSheet,
//   AsyncStorage
// } from 'react-native';
// import { connect } from 'react-redux';
// import { getInfo } from '../../actions';
// import _ from 'lodash';

// class HomeScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: 'MJ-stargram',
//       headerRight: (
//         <Button
//           onPress={async () => {
//             await AsyncStorage.clear();
//             navigation.navigate('Auth');
//           }} 
//           title="Signout"
//           color="red"
//         />
//       ),
//     };
//   };
//   componentDidMount() {
//     this.props.getInfo();
//     console.log(this.props,"제발")
    
//   }
//   renderUsers() {
//     if (this.props.user) {
//       _.map(this.props.user, uu => {
//         console.log(uu,"uu에 뭐있나")
//         return (
//           <View style={styles.card} key={uu.id}>
//             <Text>{uu.username}</Text>
//           </View>
//         );
//       });
//       // return this.props.users.map(user => {
//       //   return (
//       //     <View style={styles.card} key={user.id}>
//       //       <Text>{user.username}</Text>
//       //     </View>
//       //   );
//       // });
//     } else {
//       <Text>없당</Text>
//     }
//   }
//   render() {
//     console.log(this.props.user,"아 정보좀 제발")
//     // console.log(this.props.user[0].username)
//     // console.log(this.props.user.username)
//     return (
//       <View style={styles.container}>
//         <View style={styles.users}>
//           <Text>하이</Text>
//           {/* {this.renderUsers()} */}
//         </View>
//       </View>
//     );
//   }

//   _showMoreApp = () => {
//     this.props.navigation.navigate('Other');
//   };

//   _signOutAsync = async () => {
//     await AsyncStorage.clear();
//     this.props.navigation.navigate('Auth');
//   };
// }

// function mapStateToProps(state) {
//   return { info: state.users.info };
// }
// export default connect(mapStateToProps, { getInfo })(HomeScreen);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   users: {
//     flex: 1,
//     alignSelf: "stretch",
//     justifyContent: "center"
//   },
//   card: {
//     alignSelf: "stretch",
//     padding: 30,
//     borderBottomWidth: 5,
//     borderBottomColor: '#EEE'
//   }
// });