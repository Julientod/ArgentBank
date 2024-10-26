import { SIGNIN_USER_URL, USER_PROFILE_URL, SIGNUP_USER_URL } from "../api/api";
import {
  GET_USER_REQUEST,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
  USERNAME_CHANGE_REQUEST,
  USERNAME_CHANGE_SUCCESS,
} from "../types/userTypes";

export const signInUser = (isChecked, body, routeChange, dispatch) => {
  dispatch({
    type: SIGNIN_USER_REQUEST,
  });

  fetch(SIGNIN_USER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => {
      console.log("email");
      console.log(res.status);
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Error message");
      }
    })

    .then((data) => {
      console.log(data.body);
      getUser(isChecked, data.body.token, dispatch);
      routeChange();
    })
    .catch((error) => {
      alert("Conexion denied, check email and password validity");
    });
};
export const getUser = (isChecked, token, dispatch) => {
  dispatch({
    type: GET_USER_REQUEST,
  });
  fetch(USER_PROFILE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Error message");
      }
    })
    .then((data) => {
      if (isChecked === true) {
        localStorage.setItem("token", token);
      }
      console.log(data.body);
      dispatch({
        type: SIGNIN_USER_SUCCESS,
        payload: {
          user: data.body,
          token: token,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signUpUser = (body) => {
  fetch(SIGNUP_USER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Error message");
      }
    })
    .then((data) => {
      alert(data.message);
    })
    .catch((error) => {
      alert("Impossible to create account, e-mail or username already used.");
    });
};

export const changeUserName = (token, body, dispatch) => {
  dispatch({
    type: USERNAME_CHANGE_REQUEST,
  });
  fetch(USER_PROFILE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Error message");
      }
    })
    .then((data) => {
      const isChecked = "";
      dispatch({
        type: USERNAME_CHANGE_SUCCESS,
      });
      alert(data.message);
      getUser(isChecked, token, dispatch);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signOutUSer = (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: SIGNOUT_USER,
  });
};
