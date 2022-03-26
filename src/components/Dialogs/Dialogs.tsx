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
    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ]

    let messagesData = [
        {id: 1, message: "Hi"}
        {id: 1, message: "How is your it-kamasutra?"}
        {id: 1, message: "Yo"}
        {id: 1, message: "How are you"}
        {id: 1, message: "Call me"}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DailogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DailogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DailogItem name="Sveta" id={3}/>
                <DailogItem name="Sasha" id={4}/>
                <DailogItem name="Viktor" id={5}/>
                <DailogItem name="Valera" id={6}/>

            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message="Yo" />
                <Message message="How are you" />
                <Message message="Call me" />
            </div>
        </div>
    );
};

