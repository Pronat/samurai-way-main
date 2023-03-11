import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {
    StatePropsType,
    store,
} from "./redux/state";



export const rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                state={store.getState()}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
                addMessage={store.addMessage}
                updateNewMessageText={store.updateNewMessageText}
            />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)