import React,{ Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  Image, 
  ImagePickerIOS, 
  AppRegistry,
  ImageStore, 
  TextInput 
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function() {

  pickImage = () => {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
    }, error => console.error(error));
  }
  this.pickImage();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Image style={styles.preview}/>
      {this.state.image?
        <Image style={{ flex: 1 }} source={{ uri: this.state.image }} /> :
        null
      }
    </View>
  );
}

AppRegistry.registerComponent('CameraRollPicker', () => CameraRollPicker);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    justifyContent: 'center'
  }
});
