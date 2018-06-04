import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function(props){ //props
  // let {id, content, heart} = props;
  return (
    <View style={styles.viewStyle}>
      <View style={styles.userInfo}>
        <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
        <Text style={styles.textStyle}>{props.id}</Text>
        <Ionicons name='ios-more' size={25} style={{justifyContent: "flex-end", marginTop: 10, marginLeft: 10}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 100 +"%",
    position: "relative",
    marginTop: 10
  },
  imageStyle: {
    width: 40, 
    height: 40, 
    borderRadius: 20,
    marginLeft: 10
  },
  textStyle: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "bold"
  },
  userInfo: {
    height: 60,
    width: 100 +"%",
    flexDirection: "row",
    justifyContent: "flex-start",
  }
});
