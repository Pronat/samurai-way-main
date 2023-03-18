import React from 'react';
import s from './Dialogs.module.css'
import {
    ActionsType,
    DialogsDataType,
    MessagesType, StoreRootStateType
} from "../../redux/store";
import {Message} from "./Message";
import {Dialog} from "./Dialog";
import {addMessageActionCreator, updNewMessageActionCreator} from "../../redux/profilePageReducer";
import Dialogs from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreRootStateType
}

const DialogsContainer = (props: DialogsContainerPropsType) => {

    let dialogsElements = props.store.getState().profilePage.DialogsData.map((el) => <Dialog name={el.name} id={el.id}/>)
    let MessagesElemets = props.store.getState().profilePage.messages.map((el) => <Message
        message={el.message}
        dispatch={props.store.dispatch}
    />)
    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddMessageHandler = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    const onChangeNewMessageText = (messageText: string) => {
        // const messageText = newMessageElement.current?.value
        // if (messageText) {
            props.store.dispatch(updNewMessageActionCreator(messageText))
        // }
    }

    return (
       <Dialogs
           updNewMessage={onChangeNewMessageText(messageText)}
           messages={props.store.getState().profilePage.messages}
           newMessageText={props.store.getState().profilePage.newMessageText}
           dispatch={props.store.dispatch}
           DialogsData={props.store.getState().profilePage.DialogsData}

       } />
    );
};

export default DialogsContainer