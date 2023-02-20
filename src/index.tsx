import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
    <BrowserRouter>
        <App DialogsData={DialogsData} messages={messages} PostsData={PostsData}/>
    </BrowserRouter>
    ,
    document.getElementById('root')
);