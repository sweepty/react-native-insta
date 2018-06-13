import React,{ Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  ImagePickerIOS, 
  AppRegistry,
  TextInput,
  FlatList,
  SafeAreaView

} from 'react-native';
import { connect } from 'react-redux';
import { addPost, getInfo } from '../../actions/index';

class CameraRollPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '', 
      image: ''
    };
  }

  componentDidMount() {
    this.props.getInfo(this.props.auth);
  }

  static navigationOptions = {
    title: 'adie',//로그인 한 사람 아이디로 변경하기
    // headerRight: (
    //   <Button
    //     onPress={async () => {
    //       await this.props.addPost(this.props.info.id, this.state.content , this.state.image);
    //     }} 
    //     title="공유"
    //     color="blue"
    //   />
    // ),
  };
  render() {
    console.log(this.props.info.id,"업로드인데 유저아이디확인");
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput placeholder="설명 입력..." style={styles.form}
            onChangeText={(content) => this.setState({ content: content })}
            spellCheck={false}
            autoCorrect={false}
            multiline={true}
            autoCapitalize='none'
            borderRadius="10"
            value={this.state.content}
          />
          <Button
            onPress={async () => {
              await this.props.addPost(this.props.info.id, this.state.content , this.state.image);
            }} 
            title="공유"
          />
          {/* <Button
            onPress={this.pickImage}
            title="사진 추가"
            color="purple"
            accessibilityLabel="Learn more about this purple button"
          /> */}
        </View>
      </SafeAreaView>
    );
  }
}
function mapStateToProps(state) {
  return { 
    users: state.users,
    info: state.info,
    auth: state.auth,
    newpost: state.newpost,
    
  };
}
export default connect(mapStateToProps, { addPost, getInfo })(CameraRollPicker);

AppRegistry.registerComponent('CameraRollPicker', () => CameraRollPicker);
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  preview: {
    justifyContent: 'center'
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#7a42f4',
    // borderWidth: 1,
    // borderRadius: 20,
    height: 40,
    width: 100 + '%',
    margin: 10
    
  }
});
