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
  dialogsData: [
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
  messagesData: [
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
  ]
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
