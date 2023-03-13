import React from 'react';
import {ActionsType, ProfilePageType} from "./state";

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