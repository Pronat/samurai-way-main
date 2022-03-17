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

type MessageItemPropsType = {
    message: string
}
const MessageItem = (props:MessageItemPropsType) => {
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
                <MessageItem message="Hi" />
                <MessageItem message="How is your it-kamasutra?" />
                <MessageItem message="Yo" />
                <MessageItem message="How are you" />
                <MessageItem message="Call me" />
                {/*<div className={s.message}>Hi</div>*/}
                {/*<div className={s.message}>How is your it-kamasutra</div>*/}
                {/*<div className={s.message}>Yo</div>*/}
            </div>
        </div>
    );
};

