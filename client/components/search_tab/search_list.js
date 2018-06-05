import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
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
export default function(props){ //props
  _keyExtractor = (item, index) => item.id;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.listView}
        horizontal={true}
        keyExtractor={this._keyExtractor}
        data={[{id: 'salyeon'}, 
        {id: 'adie'}, 
        {id: 'ella'},
        {id: 'presto'},
        {id: 'parrot'}]}
        renderItem={({item}) =>
          <Image key={item.id} style={styles.imageStyle} source={require('../../images/otter.png')}/>
        }
      />
    </SafeAreaView>
  );
};

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
  imageStyle: {
    width: 100 + "%", 
    height: 120,
    margin: 1,
    justifyContent: "flex-start"
  },
  listView: {
    // width: 100 + "%",
    // backgroundColor: "slateblue",
    margin: 10
  },
  listItem: {
    marginBottom: 20
  }
});
