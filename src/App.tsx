import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";


export const App = () => {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <NavBar/>
            <div className={s.AppWrapperContent}>
                <Switch>
                    <Route path={'/profile'} component={Profile} />
                    <Route path={'/message'} component={Dialogs} />
                </Switch>

            </div>
        </div>
    );
}

export default App