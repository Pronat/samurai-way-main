import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


type AppPropsType = {

}
export const App = (props: AppPropsType) => {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <NavBar
            />
            <div className={s.AppWrapperContent}>
                <Switch>
                    <Route path={'/profile'} render={
                        () => <ProfileContainer
                        />}/>
                    <Route path={'/message'}
                           render={() =>
                               <DialogsContainer
                               />}/>

                    <Route path={'/users'} component={UsersContainer}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/friends'} component={Friends}/>
                </Switch>
            </div>
        </div>
    );
}

export default App