import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { getInfo } from '../actions';
import { bindActionCreators } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

// class UserProfile extends Component {
//   componentDidMount(){
//     this.props.getInfo();
//   }
//   render(){
//     return(
//       <View style={styles.viewStyle}>
//        <View style={styles.infoStyle}>
//          <Text style={styles.textStyle}>{props.name}</Text>
//          <Text >{props.intro}</Text>
        
//          {/* <Text >{this.props.info}</Text> */}
//          {/* {_.map(getInfo(), (item,index) => (
          
// //           <Text >{index}</Text>
// //         ))}; */}
//          <Text style={styles.textStyle}>{props.website}</Text>
//        </View>
//      </View>
//     );
//   }
// }
// //container component -> presentation component 
// function mapStateToProps(state) {
//   return {
//     info: state.users.info,
//   };
// }
// //presentation component -> container component
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ getInfo }, dispatch);
// }
// export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
export default function(props){ //props
  // componentDidMount(){
  //   this.props.getInfo()
  //   // return ();
  // }
  // console.log(this.props.info);
  return (
    <View style={styles.viewStyle}>
      <View style={styles.infoStyle}>
        <Text style={styles.textStyle}>{props.name}</Text>
        <Text >{props.intro}</Text>
        
        {/* <Text >{this.props.info}</Text> */}
        {/* {_.map(getInfo(), (item,index) => (
          
          <Text >{index}</Text>
        ))}; */}
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
