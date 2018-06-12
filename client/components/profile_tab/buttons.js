import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, StackNavigator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
export default function(props){ //props
//   let {posts, follower, following} = props;
  onPressLearnMore = () => {
    
  }
  _showMoreApp = () => {
    this.props.navigation.navigate('Edit');
  };
  return (
    <View style={styles.viewStyle}>
      <Button
        title="Edit profile"
        onPress={() => this.props.navigation.navigate('Edit')}
      />
      <Button onPress={onPressLearnMore} title="프로필 수정" color="black"/>
      {/* <Button title="sign out" onPress={this._signOutAsync} /> */}
      <Button onPress={_showMoreApp} title="설정" color="black"/>
    </View>
    
  );
};
// _signOutAsync = async () => {
//   await AsyncStorage.clear();
//   this.props.navigation.navigate('Auth');
// };

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "flex-start",
    alignItems: "center",
    // // width: 100 +"%",
    // position: "relative",
    flexDirection: "row",
    flex: 7,
    
  },
});
