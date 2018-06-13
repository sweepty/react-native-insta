import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getInfo, getProfile } from '../../actions/index';

class editProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      intro: '',
      myurl: ''
    }
  }
  static navigationOptions = {
    title: '프로필 수정',
    headerLeft: (
      <Button
        onPress={() => {
          this.navigation.navigate('profile');
        }} 
        title="취소"
      />
    ),
    headerRight: (
      <Button
        onPress={() => {
          this.props.addPost(this.state.content, this.state.image , this.props.auth);
        }} 
        title="완료"

      />
    ),
  };
  componentDidMount() {
    this.props.getInfo(this.props.auth);
    this.props.getProfile(this.props.auth);
    this.setState({
      name: this.props.profile.Profile.name,
      username: this.props.auth,
      intro: this.props.profile.Profile.intro,
      myurl: this.props.profile.Profile.myurl
    })
  }
  renderItem(item) {
    return 
      <ListItem 
        key={item.index} 
        id={item.index} 
        item={item.item} />;
  }
  pickImage = () => {
    ImagePickerIOS.openSelectDialog({}, (imageUri) => {
      this.setState({ image: imageUri });
    }, () => {console.log('유저가 선택 취소함')}
    // error => console.error(error)
  )};
  
  render() {
    console.log(this.props.auth,"유저네임ㅎㅎㅎ")
    console.log(this.props.info,"내 정보 확인")
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rowStyle}>
            <Image style={styles.imageStyle} source={require('../../images/otter.png')}/>
            <Button title="프로필 사진 바꾸기" onPress={() => pickImage}/>
            <View style={styles.forms}>
              <Text style={styles.fontStyle}>이름</Text>
              <TextInput style={styles.inputStyle} placeholder={this.props.profile.name}
                onChangeText={(name) => this.setState({ name: name })}
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize='none'
                borderRadius="10"
                value={this.state.name}
              />
            </View>
            {/* <View style={styles.forms}>
              <Text style={styles.fontStyle}>사용자 이름</Text>
              <TextInput style={styles.inputStyle} placeholder={this.props.info.username}
                onChangeText={(username) => this.setState({ username: username })}
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize='none'
                borderRadius="10"
                value={this.state.username}
              />
            </View> */}
            <View style={styles.forms}>
              <Text style={styles.fontStyle}>웹사이트</Text>
              <TextInput style={styles.inputStyle} placeholder={this.props.profile.myUrl}
                onChangeText={(myurl) => this.setState({ myurl: myurl })}
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize='none'
                borderRadius="10"
                value={this.state.myurl}
              />
            </View>
            <View style={styles.forms}>
              <Text style={styles.fontStyle}>소개</Text>
              <TextInput style={styles.inputStyle} placeholder={this.props.profile.intro}
                onChangeText={(intro) => this.setState({ intro: intro })}
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize='none'
                borderRadius="10"
                value={this.state.intro}
              />
            </View>
            <Button
              onPress={() => {
                this.props.updateProfile(this.state.name, this.state.myurl , this.state.intro);
              }} 
              title="완료"

            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return { 
    info: state.info,
    auth: state.auth,
    profile: state.profile
  };
}
export default connect(mapStateToProps, { getInfo, getProfile })(withNavigation(editProfile));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  rowStyle: {
    flexDirection: "column",
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  imageStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10
  },
  forms: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10
  },
  fontStyle: {
    fontSize: 17,
    justifyContent: "space-around",
  },
  inputStyle: {
    fontSize: 17,
    justifyContent: "space-around",
    color: 'gray'
  }
});