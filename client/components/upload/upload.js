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
  TextInput,
  FlatList 
} from 'react-native';
import { connect } from 'react-redux';
import { addPost, getInfo } from '../../actions/index';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class CameraRollPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '', 
      image: ''
    };
  }
  static navigationOptions = {
    title: 'salyeon',//로그인 한 사람 아이디로 변경하기
    headerRight: (
      <Button
        onPress={async () => {
          // this.props.addPost("good", null, "adie");
          this.props.addPost(this.state.content, this.state.image , this.props.auth);
        }} 
        title="공유"
        color="blue"
      />
    ),
  };
  pickImage = () => {
    ImagePickerIOS.openSelectDialog({}, (imageUri) => {
      this.setState({ image: imageUri });
    }, () => {console.log('유저가 선택 취소함')}
    // error => console.error(error)
  )};

  render() {
    console.log(this.props.auth,"업로드인데 유저아이디확인");
    return (
      <View style={styles.container}>
        <TextInput placeholder="설명 입력..." style={styles.form}
          onChangeText={(content) => this.setState({ content: content })}
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize='none'
          borderRadius="10"
          value={this.state.content}
        />
      </View>
      // <View style={{ flex: 1, justifyContent: 'center' }}>
      //   {/* <Image source ={require(this.state.image)}/> */}
      //   <TextInput
      //     style={styles.form}
      //     multiline={true}
      //     onChangeText={(text) => this.setState({text})}
      //     placeholder="설명 입력..."
      //     value={this.state.text}
      //   />
      //   <Button
      //     onPress={this.pickImage}
      //     title="사진 추가"
      //     color="purple"
      //     accessibilityLabel="Learn more about this purple button"
      //   />
      //   {/* <Image style={styles.preview}/>
      //   {this.state.image?
      //     <Image style={{ flex: 1 }} source={{ uri: this.state.image }} /> :
      //     null
      //   } */}
      // </View>
    );
  }
}
function mapStateToProps(state) {
  return { 
    users: state.users,
    info: state.info,
    auth: state.auth,
    addPost: state.addPost,
    
  };
}
export default connect(mapStateToProps, { addPost, getInfo })(CameraRollPicker);

// AppRegistry.registerComponent('CameraRollPicker', () => CameraRollPicker);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    justifyContent: 'center'
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#7a42f4',
    borderWidth: 1,
    // borderRadius: 20,
    height: 40,
    width: 100 + '%'
    
  }
});
