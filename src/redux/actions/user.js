import {
  SIGNUP_ACTION,
  SIGNUP_ACTION_FAIL,
  SIGNUP_ACTION_SUCCESS,
  SIGNUP_ACTION_LOADING,
  TOGGLE_SIGNUP
} from "../constants/actionTypes";

const signUpAction = payload => {
  return {
    type: SIGNUP_ACTION,
    user: payload.user,
    token: payload.token
  };
};

const signUpActionFail = message => {
  return {
    type: SIGNUP_ACTION_FAIL,
    message
  };
};

const signUpActionSuccess = message => {
  return {
    type: SIGNUP_ACTION_SUCCESS,
    message
  };
};

const signUpLoading = signUpLoader => {
  return {
    type: SIGNUP_ACTION_LOADING,
    signUpLoader
  };
};
 export const toggleSignUp = (showSignUp) => {
  return {
    type: TOGGLE_SIGNUP,
    showSignUp
  }
}

export const signUp = (firstName, lastName, email, password, phone) => {
  return async dispatch => {
    dispatch(signUpLoading(true));
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/user/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        phone
      })
    })
      .then(response => response.json())
      .then(response =>
        response.status === "success"
          ? (dispatch(signUpAction(response.data)),
            dispatch(
              signUpActionSuccess("Your account has been created successfully!")
            ),
            setTimeout(() => {
              window.location.reload(true);
            }, 3000))
          : (dispatch(signUpActionFail(response.message)),
            setTimeout(() => {
              window.location.reload(true);
            }, 2000))
      );
  };
};
