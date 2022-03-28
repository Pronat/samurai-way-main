import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: Array<MessagesType>
}
export type DialogsType = {
    id:number
    name:string
}
export type MessagesType = {
    id:number
    message:string
}

export const Dialogs = (props:DialogsPropsType) => {
    // let dialogs = [
    //     {id: 1, name: "Dimych"},
    //     {id: 2, name: "Andrey"},
    //     {id: 3, name: "Sveta"},
    //     {id: 4, name: "Sasha"},
    //     {id: 5, name: "Viktor"},
    //     {id: 6, name: "Valera"},
    // ]
    //
    // let messages = [
    //     {id: 1, message: "Hi"},
    //     {id: 1, message: "How is your it-kamasutra?"},
    //     {id: 1, message: "Yo"},
    //     {id: 1, message: "How are you"},
    //     {id: 1, message: "Call me"},
    // ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

