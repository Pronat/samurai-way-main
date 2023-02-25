import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, state} from "./redux/state";



ReactDOM.render(
    <BrowserRouter>
        <App
            DialogsData={state.profilePage.DialogsData}
            messages={state.profilePage.messages}
            PostsData={state.postsPage.PostsData}
            siteBar={state.siteBar}
            addPost={addPost}
            addMessage={addMessage}
        />
    </BrowserRouter>
    ,
    document.getElementById('root')
);