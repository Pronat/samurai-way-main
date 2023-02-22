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
}
export type PostsPageType = {
    PostsData: Array<PostsDataType>
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
export let state = <StatePropsType>{
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
    },
    postsPage: <PostsPageType>{
        PostsData: <Array<PostsDataType>>[
            {id: 1, message: 'Hello, it is my first post', likeCount: 23},
            {id: 2, message: 'Where are you?', likeCount: 56},
            {id: 3, message: 'I need new phone', likeCount: 2},
            {id: 4, message: 'What did you say?', likeCount: 99},
        ]
    },
    siteBar: <Array<SiteBarType>>[
        {id: 1, name: 'Tom'},
        {id: 2, name: 'Clark'},
        {id: 3, name: 'Kent'},
    ],

}