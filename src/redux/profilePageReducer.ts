import React from 'react';
import {
    ActionAddMessageType,
    ActionsType,
    ActionUpdNewMessType,
    DialogsDataType,
    MessagesType,
    ProfilePageType
} from "./store";
import {message} from "antd";

export const addMessageActionCreator = (): ActionAddMessageType => ({type: "ADD-MESSAGE"})
export const updNewMessageActionCreator = (newMessage: string): ActionUpdNewMessType => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: newMessage
    }
}
let initialState = {
    DialogsData: <Array<DialogsDataType>>[
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Svetlana'},
        {id: 3, name: 'Burton'},
        {id: 4, name: 'Olaf'},
        {id: 5, name: 'Olga'},
        {id: 6, name: 'Nikita'},
        {id: 7, name: 'Brendon'},
    ],
    messages: <Array<MessagesType>>[
        {id: 1, message: 'Hello my friend'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'What time is it?'},
        {id: 4, message: 'Do you have any problems?'},
        {id: 5, message: 'What did you say?'},
    ],
    newMessageText: 'Enter your message'
}

const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                id:state.messages.length + 1,
                message: state.newMessageText
            }
            return {...state, newMessageText: '', messages: [...state.messages, newMessage]}
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state, newMessageText: action.newMessage}
        default :
            return {...state}
    }}

export default profilePageReducer