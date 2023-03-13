import React from 'react';
import {ActionAddMessageType, ActionsType, ActionUpdNewMessType, ProfilePageType} from "./state";

export const addMessageActionCreator = (): ActionAddMessageType => ({type: "ADD-MESSAGE"})
export const updNewMessageActionCreator = (newMessage: string): ActionUpdNewMessType => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: newMessage
    }
}


const profilePageReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                id:state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessage
            return state
        default :
            return state
    }}

export default profilePageReducer