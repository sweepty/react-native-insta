import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { getInfo } from '../actions';
import { bindActionCreators } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
export default function(props){ //props

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
