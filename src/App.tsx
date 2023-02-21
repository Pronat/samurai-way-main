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
import {} from "./index";
import {DialogsDataType, MessagesType, PostsDataType} from "./redux/state";
import Friends from "./components/Friends/Friends";

type AppPropsType = {
    DialogsData: Array<DialogsDataType>
    messages: Array<MessagesType>
    PostsData: Array<PostsDataType>
}
export const App = (props: AppPropsType) => {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <NavBar/>
            <div className={s.AppWrapperContent}>
                <Switch>
                    <Route path={'/profile'} render={()=><Profile PostsData={props.PostsData}/>}/>
                    <Route path={'/message'} render={()=><Dialogs DialogsData={props.DialogsData} messages={props.messages}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/friends'} component={Friends}/>

                    {/*<Route path={'/404'} element={'<h1 style={{}}>Wrong PAGE</h1>'} />*/}
                    {/*<Redirect from={'*'} to={'/404'} />*/}
                </Switch>

            </div>
        </div>
    );
}

export default App