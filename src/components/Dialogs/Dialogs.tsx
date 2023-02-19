import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";

type DialogsType = {}
type DialogType = {
    name: string
    id: number
}
type MessageType = {
    message: string
}

export const Dialog = (props: DialogType) => {
    return (
        <div className={`${s.name} ${s.active}`}>
            <NavLink to={`/message/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = (props: DialogsType) => {
    let DialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Svetlana'},
        {id: 3, name: 'Burton'},
        {id: 4, name: 'Olaf'},
        {id: 5, name: 'Olga'},
        {id: 6, name: 'Nikita'},
        {id: 7, name: 'Brendon'},
    ]
    let messages = [
        {id: 1, message: 'Hello my friend'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'What time is it?'},
        {id: 4, message: 'Do you have any problems?'},
        {id: 5, message: 'What did you say?'},
    ]
    let dialogsElements = DialogsData.map((el) => <DialogItem name={el.name} id={el.id}/>)
    let MessagesElemets = messages.map((el) => <Message message={})

    return (
        <div className={s.dialogsPage}>
            <div className={s.names}>
                {
                    dialogsElements
                }

            </div>
            <div className={s.messages}>
                {
                    MessagesElemets
                }
            </div>

        </div>
    );
};

export default Dialogs