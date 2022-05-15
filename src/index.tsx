import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppPropsType} from './App';
import store from "./redax/state";
import state from "./redax/state";

let rerenderEntireTree = (state:AppPropsType) => {
    ReactDOM.render(
        <App
            store={store}
            state={store.getState()}
            addPost={store.addPost.bind(store)}
            updateNewPostChange={store.updateNewPostChange.bind(store)}
        />,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree(state:AppPropsType))