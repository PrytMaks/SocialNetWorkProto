const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
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
      ],
      newMessageText: '',
    },
  },
  getState(){
    return this._state;
  },
  // Ниже функция называлась также как и в index.js - RerenderEntireTree;
  _callSubscriber(){
    console.log('state was changed!');
  },
  subscribe(observer){
    this._callSubscriber = observer; // Паттерн обсервер наблюдатель
  },

  dispatch(action){
    if(action.type === 'ADD_POST'){
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText, 
        likesCount: 10500,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE_NEW_POST_TEXT'){
        this._state.profilePage.newPostText = action.text;
        this._callSubscriber(this._state);
    } else if(action.type === 'UPDATE_NEW_MESSAGE_BODY'){
        this._state.dialogsPage.newMessageText = action.body;
        this._callSubscriber(this._state);
    }  else if(action.type === 'SEND_MESSAGE'){
        let bodyText = this._state.dialogsPage.newMessageText;
        this._state.dialogsPage.newMessageText = '';
        this._state.dialogsPage.messages.push({id: this._state.dialogsPage.messages.length + 1, message: bodyText});
        this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST,})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text});

export default store;

window.store = store;