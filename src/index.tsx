import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import {StatePropsType, store} from "./redux/store";
import StoreContext from "./StoreContext";
import {Provider} from "react-redux";


export const rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            {/*<StoreContext.Provider value={store}>*/}
                <App
                />
            </Provider>
            {/*</StoreContext.Provider>*/}
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

// store.subscribe(rerenderEntireTree)
store.subscribe(() => {
        let state = store.getState()
        rerenderEntireTree(state)
    }
)