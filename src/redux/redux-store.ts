import {combineReducers, createStore} from "redux";
import postsPageReducer from "./postsPageReducer";
import profilePageReducer from "./profilePageReducer";
import siteBarReducer from "./siteBarReducer"
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
    postsPage: postsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersReducer,
    siteBar: siteBarReducer
})

export const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store

