import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";


export const App = () => {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <NavBar/>
            <Profile />
        </div>
    );
}

export default App