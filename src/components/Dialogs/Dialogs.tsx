import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DailogItemPropsType = {
    name: string;
    id: number;
}

const DailogItem = (props: DailogItemPropsType) => {
    return(
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
    )
}

type DialogsPropsType = {
    message: string;
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {/*<div className={s.dialog + ' ' + s.active}>*/}
                    {/*    <NavLink to="/dialogs/1">Dimych</NavLink>*/}
                    {/*</div>*/}
                    <DailogItem name ="Dimych" id = {1} />
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/2">Andrey</NavLink>
                    </div>
                    <div className={s.dialog}>
                       <NavLink to="/dialogs/3">Sveta</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/4">Sasha</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/5">Viktor</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/6">Valera</NavLink>
                    </div>
                </div>

                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How is your it-kamasutra</div>
                    <div className={s.message}>Yo</div>
                </div>
            </div>
    );
};

