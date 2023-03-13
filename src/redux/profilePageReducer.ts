import React from 'react';
import {ActionsType, ProfilePageType} from "./state";

export const ProfilePageReducer = (state: ProfilePageType, action: ActionsType) => {
    if (action.type === 'ADD-MESSAGE') {
        const newMessage = {
            id:state.messages.length + 1,
            message: state.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newMessage
    }
    return state
};
