import axios from 'axios';
import qs from 'qs';
import { AsyncStorage } from 'react-native';
import { Config } from '../config';
import NavigationService from '../navigation_service';

export const LOGIN = 'LOGIN';
export const FETCHED_USERS = 'FETCHED_USERS';
export const FETCHED_USERINFO = 'FETCHED_USERINFO';
export const ADD_POST = 'ADD_POST';
export const GET_MY_PROFILE = 'GET_MY_PROFILE';
export function signin(username, password) {
  return async dispatch => {
    try {
      // 주의!: OAuth2Server는 x-www-form-urlencoded 만 받는다.
      const response = await axios.post(`${Config.server}/api/oauth/token`,
        qs.stringify({
          username: username,
          password: password,
          client_secret: Config.clientSecret,
          client_id: Config.clientId,
          grant_type: 'password'
        }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

      console.log("RESULT", response.data);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
      console.log(`Bearer ${response.data.access_token}`);
      console.log(username,"유저네이이이이임")
        
      dispatch({type: LOGIN, payload: "adie"}); 
      await AsyncStorage.setItem('accessToken', response.data.access_token);
      NavigationService.navigate('App');
    } catch (err) {
      console.log(err.response || err);
      alert('Invalid ID or Password');
    }
  };
}

export function signout() {
  console.log("SIGNOUT!!");
  return async dispatch => {
    console.log("DELETE authorization header!");
    delete axios.defaults.headers.common['Authorization'];
    await AsyncStorage.clear();
    NavigationService.navigate('Auth');
  };
}

export function fetchUsers() {
  return dispatch => {
    console.log(axios.defaults.headers.common);
    axios.get(`${Config.server}/api/users`).then( response => {
      dispatch({type: FETCHED_USERS , payload: response.data});
    }).catch(err => {
      console.log(err.response);
      if (err.response.status == 401) {
        dispatch(signout());
      } else {
        alert('Network Error');
      }
    });
  };
}
export function getInfo() {
  return dispatch => {
    console.log(axios.defaults.headers.common);
    axios.get(`${Config.server}/api/users/me`).then( response => {
      console.log(response.data,"겟인포 데이터 확인")
      if (response.data != null) {
        dispatch({type: FETCHED_USERSINFO, payload: response.data});
      } else {
        // dispatch({type: FETCHED_USERSINFO, payload: null});
      }
    }).catch(err => {
      console.log(err.response);
      if (err.response.status == 401) {
        dispatch(signout());
      } else {
        alert('에러ㅜ');
      }
    });
  };
}
// export function getInfo() {
//   return async dispatch => {
//     try {
//       // 주의!: OAuth2Server는 x-www-form-urlencoded 만 받는다.
//       const response = await axios.get(`${Config.server}/api/users/me`,
//         qs.stringify({
//           username: username,
//         }), {
//           headers: { 'Content-Type': 'application/json' }
//         });

//       console.log("RESULT", response.data);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
//       console.log(`Bearer ${response.data.access_token}`);
//       console.log(username,"유저네이이이이임")

//       dispatch({type: FETCHED_USERINFO, payload: response.data})
//       await AsyncStorage.setItem('accessToken', response.data.access_token);
//       await AsyncStorage.setItem('username', username);
//       NavigationService.navigate('App');
//     } catch (err) {
//       console.log(err.response,"에러" || err, "에러");
//       alert('ERROR');
//     }
//   };
  // return dispatch => {
  //   console.log(axios.defaults.headers.common);
  //   axios.get(`${Config.server}/api/users/me`).then( response => {
  //     console.log(response.data,"내정보")
  //     dispatch({type: FETCHED_USERINFO, payload: response.data});
  //   }).catch(err => {
  //     console.log(err.response);
  //     if (err.response.status == 401) {
  //       dispatch(signout());
  //     } else {
  //       alert('Network Error');
  //     }
  //   });
  // };
// }
export function fetchPost() {
  return dispatch => {
    console.log(axios.defaults.headers.common);
    axios.get(`${Config.server}/api/post`).then( response => {
      dispatch({type: 'FETCHED_POST', payload: response.data});
    }).catch(err => {
      console.log(err.response);
      if (err.response.status == 401) {
        dispatch(signout());
      } else {
        alert('Network Error');
      }
    });
  };
}

export function addPost(content, image, username) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/post`,
        qs.stringify({
          userId: 2,
          content: content,
          image: image,
        }), {
          headers: { 'Content-Type': 'application/json' }
        });

      console.log("RESULT", response.data);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
      console.log(`Bearer ${response.data.access_token}`);
      console.log(content,"뭐라고 적었죠")
      console.log(username,"뭐라고 적었죠")
        
      dispatch({type: ADD_POST, payload: response.data}); 
      await AsyncStorage.setItem('accessToken', response.data.access_token);
      NavigationService.navigate('App');
    } catch (err) {
      console.log(err.response || err);
      alert('Invalid ID or Password');
    }
  };
}

export function getProfile() {
  return dispatch => {
    console.log(axios.defaults.headers.common);
    axios.get(`${Config.server}/api/users/myprofile`).then( response => {
      dispatch({type: GET_MY_PROFILE , payload: response.data});
    }).catch(err => {
      console.log(err.response);
      if (err.response.status == 401) {
        dispatch(signout());
      } else {
        alert('Network Error');
      }
    });
  };
}

