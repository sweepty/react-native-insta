import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function(props){ //props
//   let {posts, follower, following} = props;
  return (
    <View style={styles.viewStyle}>
      <View style={styles.infoStyle}>
        <Text style={styles.textStyle}>{props.name}</Text>
        <Text >{props.intro}</Text>
        <Text style={styles.textStyle}>{props.website}</Text>
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
  textStyle: {
    fontWeight: 'bold',
  },
  infoStyle: {
    flexDirection: "column",
    alignItems: "flex-start",
    // fontSize: 20,
    marginLeft: 20
  }
});
