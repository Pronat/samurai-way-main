import {combineReducers, createStore} from "redux";
import postsPageReducer from "./postsPageReducer";
import profilePageReducer from "./profilePageReducer";
import siteBarReducer from "./siteBarReducer"

export const rootReducer = combineReducers({
    postsPage: postsPageReducer,
    profilePage: profilePageReducer,
    siteBar: siteBarReducer
})

export const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>

