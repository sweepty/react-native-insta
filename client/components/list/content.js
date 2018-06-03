import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function(props){ //props
  // let {id, content, heart} = props;
  return (
    <View style={styles.viewStyle}>
      <Image style={{width: 100 + "%", height: 250}} source={require('../../images/otter.png')}/>
      <View style={styles.icons}>
        <Ionicons name='ios-heart-outline' size={25}/>
        <Ionicons name='ios-text-outline' size={25}/>
        <Ionicons name='ios-paper-plane-outline' size={25}/>
        <Ionicons name='ios-bookmark-outline' size={25}/>
      </View>
      <Text style={styles.likeStyle}>좋아요 {props.like}개</Text>
      <Text style={styles.idStyle}>{props.id}</Text>
      <Text style={styles.textStyle}>{props.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    width: 100 +"%",
  },
  icons: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  likeStyle: {
    fontSize: 15,
    marginLeft: 15,
    fontWeight: "bold"
  },
  idStyle: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "bold"
  },
  textStyle: {
    fontSize: 15,
    marginLeft: 15
  },
});
