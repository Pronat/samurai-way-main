import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {} from "../../index";
import {DialogsDataType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    DialogsData: Array<DialogsDataType>
    messages: Array<MessagesType>
}

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
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.DialogsData.map((el) => <Dialog name={el.name} id={el.id}/>)
    let MessagesElemets = props.messages.map((el) => <Message message={el.message} />)

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