import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>  //должен обромлять  Route
        <div className="app-wrapper">
            <Header type1={"Это заголовок"}/>
            <Navbar textNavbar={"Menu"}/>
            <div className="app-wrapper-content">
                <Route path='/Dialogs' component={Dialogs} />
                <Route path='/profile' component={Profile}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
