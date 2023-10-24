import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const stateTest = {
  postsData: [
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


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state = {stateTest}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
