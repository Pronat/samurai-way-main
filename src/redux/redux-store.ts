import {combineReducers, createStore} from "redux";
import postsPageReducer from "./postsPageReducer";
import profilePageReducer from "./profilePageReducer";
import siteBarReducer from "./siteBarReducer";

let reducers = combineReducers({
    postsPage: postsPageReducer,
    profilePage: profilePageReducer,
    siteBar: siteBarReducer
})

let store = createStore()

export default store