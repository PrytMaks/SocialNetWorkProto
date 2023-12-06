import { usersAPI, authAPI } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';

const SET_CURRENT_AUTH_USER_DATA = 'SET_CURRENT_AUTH_USER_DATA';
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  currentAuthUser: null,
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USER_DATA: { 
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }
    }
    case SET_CURRENT_AUTH_USER_DATA: {
      return {
        ...state,
        currentAuthUser: action.currentUserProfile
      }
    }
    default: 
      return state;
  }
}
//AC можно не писать 
export const setAuthUserDataAC = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const setCurrentAuthUserDataAC = (currentUserProfile) => ({type: SET_CURRENT_AUTH_USER_DATA, currentUserProfile}); 

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me()
    .then((data) => {
      if(data.resultCode === 0){
        let {id, login, email} = data.data
        dispatch(setAuthUserDataAC(id, email, login));
        //Сетаем свою аву из API аву не поставил так как не смог сетнуть фото в профиле ннет возможности
        usersAPI.getProfile(id).then((data) => {
            let currentAuthUser = data;
            dispatch(setCurrentAuthUserDataAC(currentAuthUser))
          })
      }
    });
  }
}


export default authReducer;