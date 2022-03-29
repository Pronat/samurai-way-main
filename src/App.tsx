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
import {DialogsType, MessagesType, PostsType} from "./redax/state";


type AppPropsType = {
    posts: PostsType[]
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
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
                <Route path='/dialogs' render={()=><Dialogs messages={props.messages} dialogs={props.dialogs}  />}/>
                <Route path='/profile' render={()=><Profile posts={props.posts} />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
