import {
  GET_CARS,
  LOGIN,
  LOGOUT,
  SIGN_UP,
  ADD_COMMENT,
  READ_COMMENTS,
} from "./ActionType";

import axios from "axios";

export const getCars = () => (dispatch) => {
  axios.get("http://localhost:5000/api/cars").then((res) => {
    dispatch({
      type: GET_CARS,
      payload: res.data,
    });
  });
};

export const login = (formData) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/user/login", formData)
    .then((res) => {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
      localStorage.setItem(
        "userData",
        JSON.stringify({ token: res.data.token })
      );
    })
    .catch((err) => {
      console.log("err", err.message);
    });
};

export const signUp = (formData) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/user/signup", formData)
    .then((res) => {
      console.log("res", res);
      dispatch({
        type: SIGN_UP,
        payload: res.data,
      });
      localStorage.setItem(
        "userData",
        JSON.stringify({ token: res.data.token })
      );
    })
    .catch((err) => {
      console.log("err", err.message);
    });
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};

export const addComment = (cid, formData) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/cars/comment/" + cid, formData)
    .then((res) => {
      dispatch({
        type: ADD_COMMENT,
        payload: res.data,
      });
    });
};

export const readComment = (cid) => (dispatch) => {
  axios.get("http://localhost:5000/api/cars/comments/" + cid).then((res) => {
    dispatch({
      type: READ_COMMENTS,
      payload: res.data,
    });
  });
};

// export const getUserById = (id) => (dispatch) => {
//   axios.get("http://localhost:5000/api/user/" + id).then((res) => {
//     dispatch({
//       type: GET_USER_BY_ID,
//       payload: res.data.user.name,
//     });
//   });
// };
