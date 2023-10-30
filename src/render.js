import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, updateNewPostText } from './redux/state.js'; // Циклический импорт!!!

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
    </React.StrictMode>
  );
}

export default rerenderEntireTree;