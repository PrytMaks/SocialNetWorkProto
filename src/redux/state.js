const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
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
      newPostText: '',
    },
  
    dialogsPage: {
      messages: [
        {
          id: 1,
          message: "Hi!",
        },
        {
          id: 2,
          message: "How is your IT-Kamasutra ?",
        },
        {
          id: 3,
          message: "Yo nigger",
        },
        {
          id: 4,
          message: "Yo",
        },
        {
          id: 5,
          message: "Yo",
        },
      ],
      dialogs: [
        {
          id: 1,
          name: "Max",
        },
        {
          id: 2,
          name: "Boris",
        },
        {
          id: 3,
          name: "Natalia",
        },
        {
          id: 4,
          name: "Julia",
        },
        {
          id: 5,
          name: "Inessa",
        },
      ]
    },
  },
  getState(){
    return this._state;
  },
  _rerenderEntireTree(){
    console.log('state was changed!');
  },
  subscribe(observer){
    this._rerenderEntireTree = observer; // Паттерн обсервер наблюдатель
  },

  dispatch(action){
    if(action.type === 'ADD-POST'){
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText, 
        likesCount: 10500,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._rerenderEntireTree(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        this._state.profilePage.newPostText = action.text;
        this._rerenderEntireTree(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST,})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text});

export default store;

window.store = store;