import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {MyPosts} from "./components/Profile/MyPosts/MyPosts";


export const App = () => {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <NavBar/>
            <MyPosts/>
        </div>
    );
}

export default App