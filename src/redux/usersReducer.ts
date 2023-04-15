import React from 'react';
type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
export type UsersType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number
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
        small: string
        large: string
    },
    status: boolean
    followed: boolean
}

let initialState = {
    users: <Array<UserType>>[],
    pageSize: 5,
    totalUsersCount: 0
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