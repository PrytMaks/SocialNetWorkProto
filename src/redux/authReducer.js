import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";


const SET_USER_DATA = "SET_USER_DATA";

const SET_CURRENT_AUTH_USER_DATA = "SET_CURRENT_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  currentAuthUser: null,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_CURRENT_AUTH_USER_DATA: {
      return {
        ...state,
        currentAuthUser: action.currentUserProfile,
      };
    }
    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state;
  }
};
//AC можно не писать
export const setAuthUserDataAC = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
export const setCurrentAuthUserDataAC = (currentUserProfile) => ({
  type: SET_CURRENT_AUTH_USER_DATA,
  currentUserProfile,
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload:{captchaUrl},
});



export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
    if (response.resultCode === 0) {
      let { id, login, email } = response.data;
      dispatch(setAuthUserDataAC(id, email, login, true));
      //Сетаем свою аву из API аву не поставил так как не смог сетнуть фото в профиле ннет возможности
      // Внизу старый код который толком не пригодился
      // usersAPI.getProfile(id).then((data) => {
      //     let currentAuthUser = data;
      //     dispatch(setCurrentAuthUserDataAC(currentAuthUser))
      //   })
    }
  ;
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else if(response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some Error";

      dispatch(stopSubmit("login", { _error: message }));
    }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserDataAC(null, null, null, false));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
