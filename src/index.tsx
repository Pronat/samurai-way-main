import React from 'react';
import './index.css';
import {state, subscribe} from "./redax/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostChange} from "./redax/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost} updateNewPostChange={updateNewPostChange}
        />,
        document.getElementById('root')
    );
}


rerenderEntireTree()

subscribe(rerenderEntireTree)