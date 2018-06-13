import { combineReducers } from 'redux';

function auth(state = [], action) {
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    default:
      return state;
  }
}
function users(state = [], action) {
  switch (action.type) {
    case 'FETCHED_USERS':
      return action.payload;
    default:
      return state;
  }
}
function info(state = [], action) {
  switch (action.type) {
    case 'FETCHED_USERINFO': 
      return action.payload;
    default:
      return state;
  }
}
function newpost(state = [], action) {
  switch (action.type) {
    case 'ADD_POST':
      return action.payload;
    default:
      return state;
  }
}
function posts(state = [], action) {
  switch (action.type) {
    case 'FETCHED_POST':
      return action.payload;
    default:
      return state;
  }
}
function profile(state = [], action) {
  switch (action.type) {
    case 'GET_PROFILE': 
      return action.payload;
    default:
      return state;
  }
}

function mypost(state = [], action) {
  switch (action.type) {
    case 'FETCHED_MY_POST': 
      return action.payload;
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  auth,
  users,
  info,
  newpost,
  profile,
  posts,
  mypost
});

export default rootReducer;