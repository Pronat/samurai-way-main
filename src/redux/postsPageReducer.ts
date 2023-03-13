import React from 'react';
import {ActionAddPostType, ActionsType, ActionUpdNewPostType, PostsPageType} from "./state";

export const addPostActionCreator = (): ActionAddPostType => ({ type: 'ADD-POST'})
export const  updNewPostActionCreator = (text: string): ActionUpdNewPostType => {
    return {
        type: "UPDATE-NEW-POST-TEXT", newText: text
    }
}
const postsPageReducer = (state: PostsPageType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {id: state.PostsData.length + 1, message: state.newPostText, likeCount: 0}
            state.PostsData.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":  state.newPostText = action.newText
            return state
        default:
            return state
    }
};

export default postsPageReducer