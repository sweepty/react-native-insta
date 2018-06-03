import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function(props){ //props
  // let {id, content, heart} = props;
  return (
    <View style={styles.viewStyle}>

      <View style={styles.infoStyle}>
        <Text style={styles.numbers}>{props.posts}</Text>
        <Text>게시물</Text>
      </View>

      <View style={styles.infoStyle}>
        <Text style={styles.numbers}>{props.follower}</Text>
        <Text>팔로워</Text>
      </View>

      <View style={styles.infoStyle}>
        <Text style={styles.numbers}>{props.following}</Text>
        <Text>팔로잉</Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    // alignItems: "center",
    width: 100 +"%",
    position: "relative",
    margin: 15,
    flexDirection: "row",
    flex: 1,
  },
  infoStyle: {
    flexDirection: "column",
    margin: 15,
  },
  numbers: {
    fontWeight: "bold",
    fontSize: 20
  }
});
