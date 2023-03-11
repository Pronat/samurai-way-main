// let rerenderEntireTree = (state: StatePropsType) => {
//     console.log('State changed')
// }

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type PostsDataType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    DialogsData: Array<DialogsDataType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type PostsPageType = {
    PostsData: Array<PostsDataType>
    newPostText: string
}
export type SiteBarType = {
    id: number
    name: string
}
export type StatePropsType = {
    postsPage: PostsPageType
    profilePage: ProfilePageType
    siteBar: Array<SiteBarType>
}

export type StoreRootStateType = {
    _state: StatePropsType
    getState: () => StatePropsType
    rerenderEntireTree: (state: StatePropsType)=>void
    addPost: ()=>void
    updateNewPostText: (newText: string)=>void
    addMessage: ()=>void
    updateNewMessageText: (newMessage: string)=>void
}

export const store: StoreRootStateType = {
    _state: <StatePropsType>{
        profilePage: <ProfilePageType>{
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
        },
        postsPage: <PostsPageType>{
            PostsData: <Array<PostsDataType>>[
                {id: 1, message: 'Hello, it is my first post', likeCount: 23},
                {id: 2, message: 'Where are you?', likeCount: 56},
                {id: 3, message: 'I need new phone', likeCount: 2},
                {id: 4, message: 'What did you say?', likeCount: 99},
            ],
            newPostText: 'Enter your post'
        },
        siteBar: <Array<SiteBarType>>[
            {id: 1, name: 'Tom'},
            {id: 2, name: 'Clark'},
            {id: 3, name: 'Kent'},
        ]
    },
    getState () {
        return this._state
    },
    rerenderEntireTree (state: StatePropsType) {
        console.log('State changed')
    },
     addPost() {
        const newPost =  {id:  store._state.postsPage.PostsData.length+1, message: store._state.postsPage.newPostText, likeCount: 0}
         store._state.postsPage.PostsData.push(newPost)
        // updateNewPostText('')
         store._state.postsPage.newPostText = ''
        // rerenderEntireTree(store._state)
         store._state.rerenderEntireTree(store._state)
    },
     updateNewPostText(newText: string) {
         store._state.postsPage.newPostText = newText
        rerenderEntireTree(store._state)
    },

     addMessage() {
        const newMessage = {id: store._state.profilePage.messages.length+1, message: store._state.profilePage.newMessageText}
         store._state.profilePage.messages.push(newMessage)
         store._state.profilePage.newMessageText = ''
        rerenderEntireTree(store._state)
    },
     updateNewMessageText(newMessage: string) {
         store._state.profilePage.newMessageText = newMessage
        rerenderEntireTree(store._state)
    },

    subscribe(observer: (state: StatePropsType) => void) {
        rerenderEntireTree = observer
    }
}

