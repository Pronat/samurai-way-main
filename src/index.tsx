import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StatePropsType} from "./redux/store";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";






export const rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                />
            </Provider>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

// store.subscribe(rerenderEntireTree)
// store.subscribe(() => {
//         let state = store.getState()
//         rerenderEntireTree(state)
//     }
// )