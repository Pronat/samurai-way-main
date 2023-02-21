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
            <img src={'https://img.freepik.com/premium-vector/person-avatar-design_24877-38133.jpg'} />
            <NavLink to={`/message/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            <img src={'https://emojio.ru/images/apple-b/12.0/1f7e2.png'}/>
            <span>{props.message}</span>
        </div>
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