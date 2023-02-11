import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {
}
type DialogType = {
    name: string
    id: number
}
const Dialog = (props: DialogType) => {
    <div className={`${s.name} ${s.active}`}>
        <NavLink to={'/message/1'}>{props.name}</NavLink>
    </div>
}
const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogsPage}>
            <div className={s.names}>
                <div className={`${s.name} ${s.active}`}>
                    <NavLink to={'/message/1'}>Alex</NavLink>
                </div>
                <div className={`${s.name} ${s.active}`}>
                    <NavLink to={'/message/2'}>Svetlana</NavLink>
                </div>
                <div className={`${s.name} ${s.active}`}>
                    <NavLink to={'/message/3'}>Burton</NavLink>
                </div>
                <div className={`${s.name} ${s.active}`}>
                    <NavLink to={'/message/4'}>Olaf</NavLink>
                </div>
                <div className={`${s.name} ${s.active}`}>
                    <NavLink to={'/message/5'}>Olga</NavLink>
                </div>
                <div className={`${s.name} ${s.active}`}>
                    <NavLink to={'/message/6'}>Brendon</NavLink>
                </div>
                <div className={`${s.name} ${s.active}`}>
                    <NavLink to={'/message/7'}>Nikita</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hello my friend</div>
                <div className={s.message}>What are you doing?</div>
                <div className={s.message}>What time is it?</div>
                <div className={s.message}>Do you have any problems?</div>
                <div className={s.message}>What did you say?</div>
            </div>

        </div>
    );
};

export default Dialogs