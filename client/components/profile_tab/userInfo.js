import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function(props){ //props
  let {posts, follower, following} = props;
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
      <View style={styles.container}>
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
    </View>
    
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 100 +"%",
    position: "relative",
    flexDirection: "row",
    flex: 1,
    
  },
  imageStyle: {
    width: 90, 
    height: 90, 
    borderRadius: 45,
    margin: 15,
    justifyContent: "flex-start"
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
    margin: 20
  },
  numbers: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  infoStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  bottom: {
    flexDirection: "row", 
    alignItems: 'flex-start',
    justifyContent: "space-around",
  }
});
