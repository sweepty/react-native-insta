import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function(props){ //props
//   let {posts, follower, following} = props;
  onPressLearnMore = () => {
    
  }
  return (
    <View style={styles.viewStyle}>
      <Button onPress={onPressLearnMore} title="프로필 수정" color="black"/>
      <Button onPress={() => this.props.navigation.navigate('Other')} title="설정" color="black"/>
    </View>
    
  );
};

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
