import { usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";


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
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: 10500,
      };
      let stateCopy = { 
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
      return stateCopy;
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {
        ...state,
        newPostText: action.text,
      }

      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { 
        ...state,
        profile: action.profile,
      }
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
    .then((data) => {
      dispatch(setUserProfile(data));
    });
  }
}

export default profileReducer;
