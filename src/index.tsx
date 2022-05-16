import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppPropsType} from './App';
import store from "./redax/state";
import state from "./redax/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state:AppPropsType) => {
    ReactDOM.render(
        <BrowserRouter>
        <App
            store={store}
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
            // updateNewPostChange={store.updateNewPostChange.bind(store)}
        />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


// @ts-ignore
rerenderEntireTree(store.getState());
// @ts-ignore
store.subscribe(rerenderEntireTree)