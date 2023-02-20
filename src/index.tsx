import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";



ReactDOM.render(
    <BrowserRouter>
        <App DialogsData={state.DialogsData} messages={state.messages} PostsData={state.PostsData}/>
    </BrowserRouter>
    ,
    document.getElementById('root')
);