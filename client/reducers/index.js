// import { combineReducers } from 'redux';
// import UserReducer from './user_reducer';


// const rootReducer = combineReducers ({
//   users: UserReducer,
  
// });

// export default rootReducer;
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
function addPost(state = [], action) {
  switch (action.type) {
    case 'ADD_POST':
      return action.payload;
    default:
      return state;
  }
}
function getProfile(state = [], action) {
  switch (action.type) {
    case 'GET_PROFILE':
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  auth,
  users,
  info,
  addPost,
  getProfile
});

export default rootReducer;