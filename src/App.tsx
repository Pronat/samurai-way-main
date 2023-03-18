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
import {ActionsType, StatePropsType, StoreRootStateType} from "./redux/store";
import Friends from "./components/Friends/Friends";


type AppPropsType = {
    store: StoreRootStateType
    state: StatePropsType
    // dispatch: (action: ActionsType) => void

}
export const App = (props: AppPropsType) => {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <NavBar siteBar={props.state.siteBar}/>
            <div className={s.AppWrapperContent}>
                <Switch>
                    <Route path={'/profile'} render={
                        () => <Profile
                            store={props.store}
                            // PostsData={props.state.postsPage.PostsData}
                            // newPostText={props.state.postsPage.newPostText}
                            // dispatch={props.dispatch}
                        />}/>
                    <Route path={'/message'}
                           render={() => <Dialogs
                               store={props.store}
                               // DialogsData={props.state.profilePage.DialogsData}
                               // messages={props.state.profilePage.messages}
                               // newMessageText={props.state.profilePage.newMessageText}
                               // dispatch={props.dispatch}
                           />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/friends'} component={Friends}/>
                    <Friends store={props.store}/>
                </Switch>
            </div>
        </div>
    );
}

export default App