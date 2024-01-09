import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = 'DELETE_POST'

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
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});



export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
    .then((data) => {
      dispatch(setUserProfile(data));
    });
  }
}

export const getStatus = (status) => {
  return (dispatch) => {
    profileAPI.getStatus(status)
    .then((response) => {
      dispatch(setUserStatus(response.data))
      //dispatch(setUserProfile(data));
    });
  }
}
export const updateStatus = (status) => {
  //не нужно диспатчить для пут запроса ?
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if(response.data.resultCode === 0){
          dispatch(setUserStatus(status));
        }
      })
    
  }
}

export default profileReducer;
