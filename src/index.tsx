import React from 'react';
import './index.css';
import {store} from "./redax/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {, RootStateType, updateNewPostChange} from "./redax/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App
            state={store._state}
            addPost={store.addPost} updateNewPostChange={updateNewPostChange}
        />,
        document.getElementById('root')
    );
}


rerenderEntireTree()

subscribe(rerenderEntireTree)