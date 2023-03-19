import React from 'react';
import {addMessageActionCreator, updNewMessageActionCreator} from "../../redux/profilePageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsContainerPropsType = {
    // store: StoreRootStateType
}

const DialogsContainer = (props: DialogsContainerPropsType) => {


    // const onClickAddMessageHandler = () => {
    //     props.store.dispatch(addMessageActionCreator())
    // }
    // const onChangeNewMessageText = (messageText: string) => {
    //     props.store.dispatch(updNewMessageActionCreator(messageText))
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => (
                <Dialogs
                updNewMessage={(messageText) => onChangeNewMessageText(messageText)}
                addMessage={onClickAddMessageHandler}
                messages={props.store.getState().profilePage.messages}
                newMessageText={props.store.getState().profilePage.newMessageText}
                dispatch={props.store.dispatch}
                DialogsData={props.store.getState().profilePage.DialogsData}
            />
                )
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer