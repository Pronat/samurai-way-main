import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message";
import {Dialog} from "./Dialog";
import {addMessageActionCreator, updNewMessageActionCreator} from "../../redux/profilePageReducer";
import {ActionsType, DialogsDataType, MessagesType} from "../../redux/store";

type DialogsPropsType = {
    // store: StoreRootStateType
    messages: Array<MessagesType>
    DialogsData: Array<DialogsDataType>
    dispatch: (action: ActionsType) => void
    addMessage: ()=>void
    updNewMessage: (messageText: string)=>void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.DialogsData.map((el) => <Dialog name={el.name} id={el.id}/>)
    let MessagesElemets = props.messages.map((el) => <Message
        message={el.message}
        dispatch={props.store.dispatch}
    />)
    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddMessageHandler = () => {
        // props.store.dispatch(addMessageActionCreator())
        props.addMessage()
    }
    const onChangeNewMessageText = () => {
        const messageText = newMessageElement.current?.value
        if (messageText) {
            // props.store.dispatch(updNewMessageActionCreator(messageText))
            props.updNewMessage(messageText)
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
                <textarea onChange={onChangeNewMessageText} value={props.store.getState().profilePage.newMessageText}
                          ref={newMessageElement}></textarea>
                <div>
                    <button onClick={onClickAddMessageHandler}>Add message</button>
                </div>

            </div>
        </div>
    );
};

export default Dialogs