import React from 'react';
type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
export type UsersType = {
    users: UserType[]
}
// export type UserType = {
//     photoUrl: string
//     id: number
//     followed: boolean
//     FullName: string
//     status: string
//     location: {
//         city: string
//         country: string
//     }
// }
export type UserType = {
    name: string
    id: number
    uniqueUrlName: any
    photos: {
        small: any
        large: any
    },
    status: any
    followed: boolean
}

let initialState = {
    users: <Array<UserType>>[
        // {id: 1, photoUrl: 'https://avatarko.ru/img/kartinka/5/kot_4700.jpg', followed: false, FullName: 'Alex', status: 'He is a director', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoUrl: 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png', followed: false, FullName: 'Svetlana', status: 'He is a worker', location: {city: 'Minsk', country: 'US'}},
        // {id: 3, photoUrl: 'https://otkrit-ka.ru/uploads/posts/2023-01/otkrit-ka.ru_smeshnye-avatarki-1.jpg',  followed: false, FullName: 'Nikita', status: 'He is a programmer', location: {city: 'Minsk', country: 'Germany'}},
        // {id: 4, photoUrl: 'https://photowords.ru/pics_min/images_3315.png',   followed: true, FullName: 'Brendon', status: 'He is a crafter', location: {city: 'Minsk', country: 'Poland'}},
        // {id: 5, photoUrl: 'https://uprostim.com/wp-content/uploads/2021/03/image047-12_gif_thumbnail.jpeg',  followed: false, FullName: 'Olga', status: 'He is a d designer', location: {city: 'Minsk', country: 'France'}},
        // {id: 6, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/05/skachat-besplatno-prikolnuyu-avatarku.jpg',  followed: true, FullName: 'Olga', status: 'He is a engineer', location: {city: 'Minsk', country: 'Kazakhstan'}},
    ],
}

const usersReducer = (state: UsersType = initialState, action: ActionsType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(el=>el.id === action.userId ? {...el, followed: true } : el)
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(el=>el.id === action.userId ? {...el, followed: false } : el)
            }
        case 'SET-USERS':
            return {
                ...state, users: [...state.users, ...action.users]
            }


        default :
            return state
    }}

export const followAC = (userId: number) => {
    return{
        type: 'FOLLOW', userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return{
        type: 'UNFOLLOW', userId
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS', users
    } as const
}

export default usersReducer