import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

type AppPropsType = {
    DialogsData: Array<>
messages={messages}
PostsData={PostsData}
}
export const App = () => {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <NavBar/>
            <div className={s.AppWrapperContent}>
                <Switch>
                    <Route path={'/profile'} component={Profile} />
                    <Route path={'/message'} component={Dialogs} />
                    <Route path={'/news'} component={News} />
                    <Route path={'/music'} component={Music} />
                    <Route path={'/settings'} component={Settings} />
                    {/*<Route path={'/404'} element={'<h1 style={{}}>Wrong PAGE</h1>'} />*/}
                    {/*<Redirect from={'*'} to={'/404'} />*/}
                </Switch>

            </div>
        </div>
    );
}

export default App