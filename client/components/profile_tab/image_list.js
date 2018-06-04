import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function(props){ //props
//   let {posts, follower, following} = props;
  _keyExtractor = (item, index) => item.id;
  renderItem = (item) => {
    // const swipeSettings = {
    //   right: [
    //     { onPress: () => this.deleteItem(item.index), text: 'Delete', type: 'delete' }
    //   ], 
    // };
    return <Swipeout {...swipeSettings}>
      <ListItem 
        key={item.index} 
        id={item.index} 
        item={item.item} 
        onToggle={this.onItemToggle} /></Swipeout>;
  };
  
  return (
    <View style={styles.viewStyle}>
      <View style={styles.listItem}>
        <View style={styles.rowStyle}>
          <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
          <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
          <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
        </View>
        <View style={styles.rowStyle}>
          <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
          <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
          <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
        </View>
        <View style={styles.rowStyle}>
          <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
          <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
          <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
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
    // flexDirection: "row",
    flex: 1,
  },
  listItem: {
    flexDirection: "column",
    width: 100 +"%",
    flex: 1,
    margin: 3,
  },
  imageStyle: {
    width: 33 + "%", 
    height: 120,
    margin: 1,
    justifyContent: "flex-start"
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
    margin: 20
  },
  rowStyle: {
    flexDirection: "row",
  }
});
