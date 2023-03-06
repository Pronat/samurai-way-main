let rerenderEntireTree = (state: StatePropsType) => {
    console.log('State changed')
}

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

export const store = {
    state: <StatePropsType>{
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

     addPost() {
        const newPost =  {id:  store.state.postsPage.PostsData.length+1, message: store.state.postsPage.newPostText, likeCount: 0}
         store.state.postsPage.PostsData.push(newPost)
        // updateNewPostText('')
         store.state.postsPage.newPostText = ''
        rerenderEntireTree(store.state)
    },
     updateNewPostText(newText: string) {
         store.state.postsPage.newPostText = newText
        rerenderEntireTree(store.state)
    },

     addMessage() {
        const newMessage = {id: store.state.profilePage.messages.length+1, message: store.state.profilePage.newMessageText}
         store.state.profilePage.messages.push(newMessage)
         store.state.profilePage.newMessageText = ''
        rerenderEntireTree(store.state)
    },
     updateNewMessageText(newMessage: string) {
         store.state.profilePage.newMessageText = newMessage
        rerenderEntireTree(store.state)
    },

    subscribe(observer: (state: StatePropsType) => void) {
        rerenderEntireTree = observer
    }
}




// export let state = <StatePropsType>{
//     profilePage: <ProfilePageType>{
//         DialogsData: <Array<DialogsDataType>>[
//             {id: 1, name: 'Alex'},
//             {id: 2, name: 'Svetlana'},
//             {id: 3, name: 'Burton'},
//             {id: 4, name: 'Olaf'},
//             {id: 5, name: 'Olga'},
//             {id: 6, name: 'Nikita'},
//             {id: 7, name: 'Brendon'},
//         ],
//         messages: <Array<MessagesType>>[
//             {id: 1, message: 'Hello my friend'},
//             {id: 2, message: 'What are you doing?'},
//             {id: 3, message: 'What time is it?'},
//             {id: 4, message: 'Do you have any problems?'},
//             {id: 5, message: 'What did you say?'},
//         ],
//         newMessageText: 'Enter your message'
//     },
//     postsPage: <PostsPageType>{
//         PostsData: <Array<PostsDataType>>[
//             {id: 1, message: 'Hello, it is my first post', likeCount: 23},
//             {id: 2, message: 'Where are you?', likeCount: 56},
//             {id: 3, message: 'I need new phone', likeCount: 2},
//             {id: 4, message: 'What did you say?', likeCount: 99},
//         ],
//         newPostText: 'Enter your post'
//     },
//     siteBar: <Array<SiteBarType>>[
//         {id: 1, name: 'Tom'},
//         {id: 2, name: 'Clark'},
//         {id: 3, name: 'Kent'},
//     ]
// }
//
// export const addPost = () => {
//     const newPost =  {id:  state.postsPage.PostsData.length+1, message: state.postsPage.newPostText, likeCount: 0}
//     state.postsPage.PostsData.push(newPost)
//     // updateNewPostText('')
//     state.postsPage.newPostText = ''
//     rerenderEntireTree(state)
// }
// export const updateNewPostText = (newText: string) => {
//     state.postsPage.newPostText = newText
//     rerenderEntireTree(state)
// }
//
// export const addMessage = () => {
//     const newMessage = {id: state.profilePage.messages.length+1, message: state.profilePage.newMessageText}
//     state.profilePage.messages.push(newMessage)
//     state.profilePage.newMessageText = ''
//     rerenderEntireTree(state)
// }
// export const updateNewMessageText = (newMessage: string) => {
//     state.profilePage.newMessageText = newMessage
//     rerenderEntireTree(state)
// }
//
// export const subscribe = (observer: (state: StatePropsType) => void) => {
//     rerenderEntireTree = observer
// }