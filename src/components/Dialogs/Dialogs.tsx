import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

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
    return (
        <div className={s.dialogsPage}>
            <div className={s.names}>
                <Dialog name={'Alex'} id={1}/>
                <Dialog name={'Svetlana'} id={2}/>
                <Dialog name={'Burton'} id={3}/>
                <Dialog name={'Olaf'} id={4}/>
                <Dialog name={'Olga'} id={5}/>
                <Dialog name={'Nikita'} id={6}/>
                <Dialog name={'Brendon'} id={7}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello my friend'}/>
                <Message message={'What are you doing?'}/>
                <Message message={'What time is it?'}/>
                <Message message={'Do you have any problems?'}/>
                <Message message={'What did you say?'}/>
            </div>

        </div>
    );
};

export default Dialogs