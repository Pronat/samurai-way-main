import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, AddPostActionType, ChangeNewTextActionType, RootStateType, StoreType} from "./redax/state";

export type AppPropsType = {
    state:RootStateType
    // addPost: (postMessage: string) => void
    // updateNewPostChange: (newText: string) => void
    store: StoreType
    dispatch: (action: ActionsTypes)=>void
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header type1={"Это заголовок"}/>
            <Navbar />
            <div className="app-wrapper-content">
                {/*<Route path='/dialogs' component={Dialogs} />*/}
                {/*<Route path='/profile' component={Profile}/> */}
                <Route path='/dialogs' render={()=><Dialogs
                    messages={props.state.messagesPage.messages}
                    dialogs={props.state.messagesPage.dialogs}
                />}/>
                <Route path='/profile' render={()=><Profile
                    posts={props.state.profilePage.posts}
                    dispatch={props.store.dispatch.bind(props.store)}
                    newPostText={props.state.profilePage.newPostText}
                    // updateNewPostChange={props.updateNewPostChange}

                />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
