import React,{ Component } from 'react';
import { StyleSheet, Text, View, Button, ImagePickerIOS, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class CameraRollPicker extends Component {
  constructor() {
    super();
    this.state = { image: null };
  }

  componentDidMount() {
    this.pickImage();
  }

  pickImage() {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
    }, error => console.error(error));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.image?
          <Image style={{ flex: 1 }} source={{ uri: this.state.image }} /> :
          null
        }
      </View>
    );
  }
}

AppRegistry.registerComponent('CameraRollPicker', () => CameraRollPicker);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
