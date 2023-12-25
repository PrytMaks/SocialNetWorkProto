import { authAPI } from "../api/api";
const SET_USER_DATA = "SET_USER_DATA";

const SET_CURRENT_AUTH_USER_DATA = "SET_CURRENT_AUTH_USER_DATA";
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  currentAuthUser: null,
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

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserDataAC(id, email, login, true));
        //Сетаем свою аву из API аву не поставил так как не смог сетнуть фото в профиле ннет возможности
        // Внизу старый код который толком не пригодился
        // usersAPI.getProfile(id).then((data) => {
        //     let currentAuthUser = data;
        //     dispatch(setCurrentAuthUserDataAC(currentAuthUser))
        //   })
      }
    });
  };
};
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if(response.data.resultCode === 0){
        dispatch(setAuthUserDataAC(null, null, null, false));
      }
    })
};

export default authReducer;
