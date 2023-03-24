import React from 'react';
import {ActionsType, SiteBarType} from "./store";
let initialState = [
    {id: 1, name: 'Tom'},
    {id: 2, name: 'Clark'},
    {id: 3, name: 'Kent'},
]
const siteBarReducer = (state: Array<SiteBarType> = initialState, action: ActionsType) => {
    return {...state}
};

export default siteBarReducer