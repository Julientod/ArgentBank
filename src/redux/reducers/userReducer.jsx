import {
  SIGNIN_USER_FAILED,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
  USERNAME_CHANGE_REQUEST,
  USERNAME_CHANGE_SUCCESS,
} from "../types/userTypes";

const initialeState = {
  userLoading: false,
  token: "",
  user: null,
};

const userReducer = (state = initialeState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_USER_REQUEST:
      return {
        ...state,
        userLoading: true,
      };
    case SIGNIN_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        user: payload.user,
        token: payload.token,
      };
    case SIGNIN_USER_FAILED:
      return {
        ...state,
        userLoading: false,
      };
    case SIGNOUT_USER:
      return {
        ...state,
        user: null,
        token: "",
      };
    case USERNAME_CHANGE_REQUEST:
      return {
        ...state,
        userLoading: true,
      };
    case USERNAME_CHANGE_SUCCESS:
      return {
        ...state,
        userLoading: false,
      };

    default:
      return state;
  }
};
export default userReducer;
