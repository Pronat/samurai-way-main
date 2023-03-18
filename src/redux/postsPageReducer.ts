import React from 'react';
import {ActionAddPostType, ActionsType, ActionUpdNewPostType, PostsDataType, PostsPageType} from "./store";

export const addPostActionCreator = (): ActionAddPostType => ({ type: 'ADD-POST'})
export const  updNewPostActionCreator = (text: string): ActionUpdNewPostType => {
    return {
        type: "UPDATE-NEW-POST-TEXT", newText: text
    }
}

let initialState = {
    PostsData: <Array<PostsDataType>>[
        {id: 1, message: 'Hello, it is my first post', likeCount: 23},
        {id: 2, message: 'Where are you?', likeCount: 56},
        {id: 3, message: 'I need new phone', likeCount: 2},
        {id: 4, message: 'What did you say?', likeCount: 99},
    ],
    newPostText: 'Enter your post'
}
const postsPageReducer = (state: PostsPageType = initialState, action: ActionsType) => {
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