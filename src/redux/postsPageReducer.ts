import React from 'react';
import {ActionsType, PostsPageType} from "./state";

const postsPageReducer = (state: PostsPageType, action: ActionsType) => {
    if (action.type === 'ADD-POST') {
        const newPost =  {id: state.PostsData.length+1, message: state.newPostText, likeCount: 0}
        state.PostsData.push(newPost)
        state.newPostText = ''
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText
    }
    return state
};

export default postsPageReducer