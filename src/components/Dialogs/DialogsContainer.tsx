import React from 'react';
import {addMessageActionCreator, updNewMessageActionCreator} from "../../redux/profilePageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {StatePropsType} from "../../redux/store";

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
let f1 = (state: StatePropsType) => {
    return {
        DialogsData: state.profilePage.DialogsData
    }
}
let f2 = () => {
    return {}
}

const SuperDialogsContainer = connect(f1, f2) (Dialogs)

export default DialogsContainer