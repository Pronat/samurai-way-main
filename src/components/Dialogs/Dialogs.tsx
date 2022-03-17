import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DailogItemPropsType = {
    name: string;
    id: number;
}
const DailogItem = (props: DailogItemPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
const Message = (props:MessagePropsType) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

type DialogsPropsType = {
    message: string;
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DailogItem name="Dimych" id={1}/>
                <DailogItem name="Andrey" id={2}/>
                <DailogItem name="Sveta" id={3}/>
                <DailogItem name="Sasha" id={4}/>
                <DailogItem name="Viktor" id={5}/>
                <DailogItem name="Valera" id={6}/>

            </div>

            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is your it-kamasutra?" />
                <Message message="Yo" />
                <Message message="How are you" />
                <Message message="Call me" />
            </div>
        </div>
    );
};

