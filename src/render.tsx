import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostChange} from "./redax/state";

export let rerenderEntireTree = (state:RootStateType) => {
ReactDOM.render(
    <App
        state={state}
        addPost={addPost} updateNewPostChange={updateNewPostChange}
    />,
  document.getElementById('root')
);
}
