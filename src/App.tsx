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
import {RootStateType} from "./redax/state";


type AppPropsType = {
    state:RootStateType
    addPost: (postMessage: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header type1={"Это заголовок"}/>
            <Navbar />
            <div className="app-wrapper-content">
                {/*<Route path='/dialogs' component={Dialogs} />*/}
                {/*<Route path='/profile' component={Profile}/> */}
                <Route path='/dialogs' render={()=><Dialogs messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs}  />}/>
                <Route path='/profile' render={()=><Profile posts={props.state.profilePage.posts} addPost={props.addPost} />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
