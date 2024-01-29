import { usersAPI, profileAPI } from "../api/api";


const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCSESS = 'SAVE_PHOTO_SUCCSESS';
let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi!",
      likesCount: 4,
    },
    {
      id: 2,
      message: "Its my first post!",
      likesCount: 1243,
    },
    {
      id: 3,
      message: "Post to my friend",
      likesCount: 5,
    },
    {
      id: 4,
      message: "Hello fellas !",
      likesCount: 3,
    },
    {
      id: 5,
      message: "Yo",
      likesCount: 1,
    },
  ],
  profile: null,
  status: '',
  photos: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: action.newPostText,
        likesCount: 10500,
      };
      return { 
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE: {
      return { 
        ...state,
        profile: action.profile,
      }
    }
    case SET_USER_STATUS: {
      return {
        ...state, 
        status: action.status
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(e => e.id !== action.postId)
      }
    }
    case SAVE_PHOTO_SUCCSESS: {
      return {
        ...state, 
        profile: {
          ...state.profile,
          photos: action.photos
        }
      }
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const savePhotoSuccsess = (photos) => ({type: SAVE_PHOTO_SUCCSESS, photos});



export const getUserProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}


export const getStatus = (status) => async (dispatch) => {
  let response = await profileAPI.getStatus(status)
  dispatch(setUserStatus(response.data))
  //dispatch(setUserProfile(data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0){
      dispatch(setUserStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
  let response = profileAPI.savePhoto(file);
  
  if(response.resultCode === 0){
    debugger
    dispatch(savePhotoSuccsess(response.data.photos))
  }
}


export default profileReducer;
