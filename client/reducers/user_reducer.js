import { FETCHED_USERS, FETCHED_USERINFO } from '../actions/index';

export default function(state = {
  loading: false,
  error: '',
  users: [],
  info: [],
  
  },action) {
    
  switch(action.type){
  case `${FETCHED_USERS}_FULFILLED`: {
    return {
      loading: false,
      error: '',
      info: action.payload,
    };
  }
  case `${FETCHED_USERINFO}_FULFILLED`:
    return{
      loading: false,
      error: '',
      info: action.payload,
    };
  default :
    return state;
  }
}
