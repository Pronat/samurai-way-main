import React from 'react';

// let posts: Array<PostsType> = [
//     {id:1, message:"It's my first post", likesCount:4},
//     {id:2, message:"Hello, how are you", likesCount:10},
//     {id:3, message:"What happening", likesCount:2},
//     {id:4, message:"What would we do?", likesCount:18},
//     {id:5, message:"Here is my moto!", likesCount:18},
// ]
//
// let dialogs:Array<DialogsType> = [
//     {id: 1, name: "Dimych"},
//     {id: 2, name: "Andrey"},
//     {id: 3, name: "Sveta"},
//     {id: 4, name: "Sasha"},
//     {id: 5, name: "Viktor"},
//     {id: 6, name: "Valera"},
// ]
//
// let messages:Array<MessagesType> = [
//     {id: 1, message: "Hi"},
//     {id: 1, message: "How is your it-kamasutra?"},
//     {id: 1, message: "Yo"},
//     {id: 1, message: "How are you"},
//     {id: 1, message: "Call me"},
// ]


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type MessagesPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
export type RootStateType = {
    profilePage:ProfilePageType
    messagesPage:MessagesPageType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "It's my first post", likesCount: 4},
            {id: 2, message: "Hello, how are you", likesCount: 10},
            {id: 3, message: "What happening", likesCount: 2},
            {id: 4, message: "What would we do?", likesCount: 18},
            {id: 5, message: "Here is my moto!", likesCount: 18},
        ]
    },
    messagesPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 1, message: "How is your it-kamasutra?"},
            {id: 1, message: "Yo"},
            {id: 1, message: "How are you"},
            {id: 1, message: "Call me"},
        ],
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"},
        ],
    }
}