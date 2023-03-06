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
import {StatePropsType, StoreRootStateType} from "./redux/state";
import Friends from "./components/Friends/Friends";

type AppPropsType = {
    store: StoreRootStateType
    state: StatePropsType
    addPost: ()=>void
    updateNewPostText: (newText: string)=>void
    addMessage: ()=>void
    updateNewMessageText: (newMessage: string)=> void

}
export const App = (props: AppPropsType) => {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <NavBar siteBar={props.state.siteBar}/>
            <div className={s.AppWrapperContent}>
                <Switch>
                    <Route path={'/profile'} render={
                        () => <Profile PostsData={props.state.postsPage.PostsData}
                                       newPostText={props.state.postsPage.newPostText}
                                       addPost={props.addPost}
                                       updateNewPostText={props.updateNewPostText}
                        />}/>
                    <Route path={'/message'}
                           render={() => <Dialogs
                               DialogsData={props.state.profilePage.DialogsData}
                               messages={props.state.profilePage.messages}
                               newMessageText={props.state.profilePage.newMessageText}
                               addMessage={props.addMessage}
                               updateNewMessageText={props.updateNewMessageText}
                           />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/friends'} component={Friends}/>
                    <Friends siteBar={props.state.siteBar}/>
                </Switch>
            </div>
        </div>
    );
}

export default App