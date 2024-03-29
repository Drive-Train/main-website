import USER_TYPES from './types';

const initialState = {
  loggedInUser: {},
  loggedIn: false,
  users: [],
  userCreated: false,
  userExists: false,
  firstTimeSignup: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPES.LOGIN:
      return {
        ...state,
        loggedIn: true,
        loggedInUser: action.user,
      };
    case USER_TYPES.LOGIN_CHECK:
      return {
        ...state,
        loggedIn: action.userData.loggedIn,
        loggedInUser: action.userData.user,
      };
    case USER_TYPES.LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        loggedInUser: {},
      };
    case USER_TYPES.GET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case USER_TYPES.SIGNUP:
      if (action.newUser !== '' && action.status === 200) { // ok
        return {
          ...state,
          loggedInUser: action.newUser,
          userCreated: true,
          firstTimeSignup: true,
          loggedIn: true,
        };
      }
      if (action.status === 204) { // Username Exists
        return {
          ...state,
          userCreated: false,
          userExists: true,
          firstTimeSignup: true,
        };
      } // Technical Issue
      return {
        ...state,
        userCreated: false,
        userExists: false,
        firstTimeSignup: true,
      };
    case USER_TYPES.SET_ADMIN:
      return {
        ...state,
        users: action.users,
      };
    case USER_TYPES.CHANGE_USERNAME:
      return {
        ...state,
        loggedInUser: action.users,
      };
    default:
      return state;
  }
};

export default userReducer;
