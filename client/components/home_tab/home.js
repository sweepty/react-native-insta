import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, Swipeout } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import UserInfo from '../list/userInfo';
import Content from '../list/content';
class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'instagram',
  };
  _keyExtractor = (item, index) => item.id;
  renderItem(item) {
    const swipeSettings = {
      right: [
        { onPress: () => this.deleteItem(item.index), text: 'Delete', type: 'delete' }
      ], 
    };
    return <Swipeout {...swipeSettings}>
      <ListItem 
        key={item.index} 
        id={item.index} 
        item={item.item} 
        onToggle={this.onItemToggle} /></Swipeout>;
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.listView}
          keyExtractor={this._keyExtractor}
          data={[{id: 'salyeon', content:'눈빛을 보면 난 알 수가 있어 아무런 말도 필요치 않아 이런게 아마 사랑일거야 첫 눈에 반해 버린 사랑', like: 1}, 
          {id: 'adie', content:'아무런 말도 필요치 않아', like: 2}, 
          {id: 'ella', content:'이런게 아마 사랑일거야', like: 3},
          {id: 'presto', content:'첫 눈에 반해 버린 사랑', like: 4},
          {id: 'parrot', content:'진진자라', like: 4}]}
          renderItem={({item}) =>
            <View key={item.id} style={styles.listItem}>
              <UserInfo id={item.id}/>
              <Content id={item.id} content={item.content} like={item.like}/>
            </View> 
          }
        />
      </SafeAreaView>
    );
  }
}
export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

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
  listView: {
    width: 100 + "%",
    // backgroundColor: "slateblue",
    margin: 10
  },
  listItem: {
    marginBottom: 20
  }
});
