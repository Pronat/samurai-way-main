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


    const onClickAddMessageHandler = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    const onChangeNewMessageText = (messageText: string) => {
        props.store.dispatch(updNewMessageActionCreator(messageText))
    }

    return (
        <Dialogs
            updNewMessage={(messageText)=>onChangeNewMessageText(messageText)}
            addMessage={onClickAddMessageHandler}
            messages={props.store.getState().profilePage.messages}
            newMessageText={props.store.getState().profilePage.newMessageText}
            dispatch={props.store.dispatch}
            DialogsData={props.store.getState().profilePage.DialogsData}
             />
    );
};

export default DialogsContainer