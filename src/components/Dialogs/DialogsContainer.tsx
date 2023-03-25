import React from 'react';
import {addMessageActionCreator, updNewMessageActionCreator} from "../../redux/profilePageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DialogsDataType, MessagesType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    DialogsData: Array<DialogsDataType>
    messages: Array<MessagesType>
    newMessageText: string
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        DialogsData: state.profilePage.DialogsData,
        messages:state.profilePage.messages,
        newMessageText: state.profilePage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updNewMessage: (messageText: string) => {dispatch(updNewMessageActionCreator(messageText))},
        addMessage: () => {dispatch(addMessageActionCreator())},
        dispatch: dispatch
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer