import {
  SIGNUP_ACTION,
  SIGNUP_ACTION_FAIL,
  SIGNUP_ACTION_SUCCESS,
  SAMPLE_ACTION,
  SIGNUP_ACTION_LOADING,
  TOGGLE_SIGNUP
} from "../constants/actionTypes";

const initialState = {
  user: {
    address: "",
    createdAt: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    phone: "",
    updatedAt: ""
  },
  token: "",
  signUpError: "",
  signUpSuccess: "",
  signUpLoader: false,
  showSignUp: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return action.payload;

    case SIGNUP_ACTION:
      return {
        ...state,
        user: action.user,
        token: action.token,
        signUpError: "",
        signUpSuccess: "",
        signUpLoader: true
      };
    case SIGNUP_ACTION_FAIL:
      return {
        ...state,
        signUpError: action.message,
        signUpLoader: false
      };

    case SIGNUP_ACTION_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.message,
        signUpLoader: false
      }
    case SIGNUP_ACTION_LOADING: 
    return {
        ...state,
        signUpLoader: action.signUpLoader
    }
    case TOGGLE_SIGNUP:
      return {
        ...state,
        showSignUp: action.showSignUp
      }

    default:
      return state;
  }
};
