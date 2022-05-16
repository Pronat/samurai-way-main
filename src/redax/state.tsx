import React from 'react';

export type StoreType = {
    _state: RootStateType
    // updateNewPostChange: (newText: string) => void
    // addPost: (newPostText: string) => void
    subscribe: (observer: () => void) => void
    _rerenderEntireTree: (state: RootStateType) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes)=>void
}

export type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}
// export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ChangeNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    newMessageBody: string
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

export const addPostActionCreator = (postText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        postText: postText
    }}
export const changeNewTextAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    }}
export const changeNewMessageAC =(newText: string): ChangeNewMessageActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageBody: newMessageBody
    }}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "It's my first post", likesCount: 4},
                {id: 2, message: "Hello, how are you", likesCount: 10},
                {id: 3, message: "What happening", likesCount: 2},
                {id: 4, message: "What would we do?", likesCount: 18},
                {id: 5, message: "Here is my moto!", likesCount: 18},
            ],
            newPostText: "it-kamasutra.com"
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
            newMessageBody: ""

        }
        // sidebar: {}
    },
    _rerenderEntireTree(state: RootStateType) {
        console.log("state changed")
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: 6,
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree(this._state)
        }   else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {

        }
            newMessageBody
    },


    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    }
}

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
    newPostText: string
}
export type MessagesPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
// type sidebar={}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType

}

export default store
