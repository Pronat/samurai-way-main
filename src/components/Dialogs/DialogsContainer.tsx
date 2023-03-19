import React from 'react';
import {addMessageActionCreator, updNewMessageActionCreator} from "../../redux/profilePageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsContainerPropsType = {
}

const DialogsContainer = (props: DialogsContainerPropsType) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const onClickAddMessageHandler = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                    const onChangeNewMessageText = (messageText: string) => {
                       store.dispatch(updNewMessageActionCreator(messageText))
                    }
                    return (
                        <Dialogs
                            updNewMessage={(messageText) => onChangeNewMessageText(messageText)}
                            addMessage={onClickAddMessageHandler}
                            messages={store.getState().profilePage.messages}
                            newMessageText={store.getState().profilePage.newMessageText}
                            dispatch={store.dispatch}
                            DialogsData={store.getState().profilePage.DialogsData}
                        />
                    )
                }



            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer