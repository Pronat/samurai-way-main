import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, StatePropsType, updateNewMessageText, updateNewPostText} from "./redux/state";
import {state} from "./redux/state";


export const rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}



rerenderEntireTree(state)