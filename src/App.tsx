import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { StoreRootStateType} from "./redux/store";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: StoreRootStateType

}
export const App = (props: AppPropsType) => {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <NavBar siteBar={props.store.getState().siteBar}/>
            <div className={s.AppWrapperContent}>
                <Switch>
                    <Route path={'/profile'} render={
                        () => <Profile
                            store={props.store}
                        />}/>
                    <Route path={'/message'}
                           render={() =>
                               // <Dialogs store={props.store}
                                    <DialogsContainer store={props.store}
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