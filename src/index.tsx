import React from 'react';
import './index.css';
import state, {RootStateType} from "./redax/state";
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppPropsType} from './App';
import  updateNewPostChange from "./redax/state";
import store from "./redax/state";

let rerenderEntireTree = (state:AppPropsType) => {
    ReactDOM.render(
        <App
            state={store.getState()}
            addPost={store.addPost}
            updateNewPostChange={state.updateNewPostChange}
        />,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)