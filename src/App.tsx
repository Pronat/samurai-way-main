import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header type1={"Это заголовок"}/>
            <Navbar type2={"Это меню"}/>
            <Profile type3={"Это сам сайт"}/>



        </div>
    );
}

export default App;
