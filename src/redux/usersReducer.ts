import React from 'react';
type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
export type UsersType = {
    id: number
    followed: boolean
    FullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

let initialState = {
    users: <Array<UsersType>>[
        {id: 1, followed: false, FullName: 'Alex', status: 'He is a director', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: false, FullName: 'Svetlana', status: 'He is a worker', location: {city: 'Minsk', country: 'US'}},
        {id: 3, followed: false, FullName: 'Nikita', status: 'He is a programmer', location: {city: 'Minsk', country: 'Germany'}},
        {id: 4, followed: true, FullName: 'Brendon', status: 'He is a crafter', location: {city: 'Minsk', country: 'Poland'}},
        {id: 5, followed: false, FullName: 'Olga', status: 'He is a d designer', location: {city: 'Minsk', country: 'France'}},
        {id: 6, followed: true, FullName: 'Olga', status: 'He is a engineer', location: {city: 'Minsk', country: 'Kazakhstan'}},
    ],

}

const usersReducer = (state: UsersType = initialState, action: ActionsType) => {
    switch (action.type) {

        default :
            return state
    }}

export const followAC = (followed: boolean) => {
    return{
        type: 'FOLLOW', followed
    }
}
export const unFollowAC = (followed: boolean) => {
    return{
        type: 'FOLLOW', followed
    }
}

export default usersReducer