import React from 'react';
import s from './Dialogs.module.css'
import {ActionsType, DialogsDataType, MessagesType} from "../../redux/state";
import {Message} from "./Message";
import {Dialog} from "./Dialog";

type DialogsPropsType = {
    DialogsData: Array<DialogsDataType>
    messages: Array<MessagesType>
    newMessageText: string
    // addMessage: ()=>void
    // updateNewMessageText: (newMessage: string)=> void
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.DialogsData.map((el) => <Dialog name={el.name} id={el.id}/>)
    let MessagesElemets = props.messages.map((el) => <Message
        message={el.message}
        // addMessage={props.addMessage}
        dispatch={props.dispatch}
    />)
    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddMessageHandler = () => {
        // props.addMessage()
        props.dispatch({type: "ADD-MESSAGE"})
    }
    const onChangeNewMessageText = () => {
        const messageText = newMessageElement.current?.value
        if (messageText) {
            // props.updateNewMessageText(messageText)
            props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: messageText})
        }
    }

    return (
        <div className={s.dialogsPage}>
            <div className={s.names}>
                {
                    dialogsElements
                }
            </div>
            <div>
                <div className={s.messages}>
                    {
                        MessagesElemets
                    }
                </div>
                <textarea onChange={onChangeNewMessageText} value={props.newMessageText}
                          ref={newMessageElement}></textarea>
                <div>
                    <button onClick={onClickAddMessageHandler}>Add message</button>
                </div>

            </div>
        </div>
    );
};

export default Dialogs