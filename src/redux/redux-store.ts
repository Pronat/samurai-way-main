import {combineReducers, createStore} from "redux";
import postsPageReducer from "./postsPageReducer";
import profilePageReducer from "./profilePageReducer";
import siteBarReducer from "./siteBarReducer";

let reducers = combineReducers({
    postsPage: postsPageReducer,
    profilePage: profilePageReducer,
    siteBar: siteBarReducer
})

export const store = createStore(reducers)
// export type RootStateType = ReturnType<typeof reducers>

export default store