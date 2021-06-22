import {
  GET_CARS,
  LOGIN,
  SIGN_UP,
  LOGOUT,
  READ_COMMENTS,
  GET_USER_BY_ID,
} from "../Actions/ActionType";

const initialState = {
  cars: [],
  userId: null,
  isLoggedIn: false,
  isLoading: false,
  token: null,
  carComments: [],
  user: null,
  loadingCarComments: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CARS:
      return { ...state, cars: payload };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
        userId: payload.userId,
        user: payload.name,
      };
    case SIGN_UP:
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
        userId: payload.userId,
        user: payload.name,
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        token: null,
        user: null,
        isAuth: null,
      };

    case READ_COMMENTS:
      return { ...state, carComments: payload, loadingCarComments: true };

    case GET_USER_BY_ID:
      return { ...state, user: payload };

    default:
      return state;
  }
};

export default reducer;
