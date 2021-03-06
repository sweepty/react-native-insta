import axios from 'axios';
import qs from 'qs';
import { AsyncStorage } from 'react-native';
import { Config } from '../config';
import NavigationService from '../navigation_service';

export const LOGIN = 'LOGIN';
export const FETCHED_USERS = 'FETCHED_USERS';
export const FETCHED_USERINFO = 'FETCHED_USERINFO';
export const ADD_POST = 'ADD_POST';
export const GET_PROFILE = 'GET_PROFILE';
export const FETCHED_POST = 'FETCHED_POST';
export const FETCHED_MY_POST = 'FETCHED_MY_POST';
export const EDIT_PROFILE = 'EDIT_PROFILE';

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
      console.log(response.data, "RESULT");
      dispatch({type: LOGIN, payload: username}); 
      await AsyncStorage.setItem('accessToken', response.data.access_token);
      await AsyncStorage.setItem('username', username);
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
    axios.get(`${Config.server}/api/users?username=${this.props.auth}`).then( response => {
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

export function getInfo(username) {
  return dispatch => {
    console.log(axios.defaults.headers.common);
    // console.log(username,"겟인포 유저정보 확인")
    axios.get(`${Config.server}/api/users/${username}`).then( response => {
      console.log(response.data,"내 정보 확인하고 싶")
      dispatch({type: FETCHED_USERINFO, payload: response.data});
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

export function getProfile(username) {
  return dispatch => {
    console.log(axios.defaults.headers.common);
    console.log(username,"유저네임 잘 넘어오나 확인")
    axios.get(`${Config.server}/api/users/myprofile/${username}`).then( response => {
      console.log(response.data,"new 내 정보 new")
      dispatch({type: GET_PROFILE, payload: response.data});
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
export function editProfile(userId, name, intro, myUrl) {
  return async () => {
    try {
      const response = await axios.put(`${Config.server}/api/users/myprofile`,
        qs.stringify({
          userId: userId,
          name: name,
          intro: intro,
          myUrl: myUrl,
        }), 
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      console.log("RESULT", response.data);
      // dispatch({type: EDIT_PROFILE, payload: response.data}); 
      NavigationService.navigate('App');
    } catch (err) {
      console.log(err.response || err);
      alert('ERROR');
    }
  };
}
export function fetchPost() {
  return dispatch => {
    console.log(axios.defaults.headers.common);
    axios.get(`${Config.server}/api/post`).then( response => {
      console.log(response.data, '데이터있나')
      dispatch({type: FETCHED_POST, payload: response.data});
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

export function addPost(userId, content, image) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/post`,
        qs.stringify({
          userId: userId,
          content: content,
          image: image,
        }), 
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      console.log("RESULT", response.data);
      // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
      // console.log(`Bearer ${response.data.access_token}`);
      dispatch({type: ADD_POST, payload: response.data}); 
      // await AsyncStorage.setItem('accessToken', response.data.access_token);
      NavigationService.navigate('App');
    } catch (err) {
      console.log(err.response || err);
      alert('ERROR');
    }
  };
}

export function fetchMyPost(id) {
  return dispatch => {
    console.log(axios.defaults.headers.common);
    axios.get(`${Config.server}/api/post/me/${id}`).then( response => {
      console.log(response.data, '데이터있나')
      dispatch({type: FETCHED_MY_POST, payload: response.data});
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


