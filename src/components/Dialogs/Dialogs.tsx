import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redax/state";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: Array<MessagesType>
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    let addNewText = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        let text = addNewText.current?.value
            alert({text})
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div><textarea ref={addNewText}></textarea></div>
            <button onClick={addMessage}>Add message</button>
        </div>
    );
};

