import React from 'react';
type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
export type UsersType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

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
    users: [],
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 1
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