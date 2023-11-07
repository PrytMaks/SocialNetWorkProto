import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  
    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;