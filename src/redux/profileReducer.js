const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const profileReducer = (state, action) => {

switch(action.type){
  case ADD_POST:
    let newPost = {
      id: state.posts.length + 1,
      message: state.newPostText, 
      likesCount: 10500,
    };
    state.posts.push(newPost);
    state.newPostText = '';
    return state;
  case UPDATE_NEW_POST_TEXT: 
      state.newPostText = action.text;
      return state;
  default: return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST,})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text});

export  default profileReducer;