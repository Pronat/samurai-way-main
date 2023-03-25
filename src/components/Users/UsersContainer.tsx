import React from 'react';
import {Dispatch} from "redux";
import {addMessageActionCreator, updNewMessageActionCreator} from "../../redux/profilePageReducer";
import {connect} from "react-redux";
import {UserType} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state: UserType[]) => {
    return {
        DialogsData: state.users,
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer