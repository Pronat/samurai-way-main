import React from "react";
import {
    ActionsType, StoreRootStateType,
} from "../../../../redux/store";
import {addPostActionCreator, updNewPostActionCreator} from "../../../../redux/postsPageReducer";
import {ProfileInfo} from "./ProfileInfo";

export type ProfileInfoContainerType = {
    store: StoreRootStateType
    // newPostText: string
    // dispatch: (action: ActionsType) => void
}

export const ProfileInfoContainer = (props: ProfileInfoContainerType) => {

    // const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPostHandler = () => {
        props.store.dispatch(addPostActionCreator())

    }
    const onPostChange = (text: string) => {

        if (text) {
             props.store.dispatch(updNewPostActionCreator(text))
        }
    }

    return (
       <ProfileInfo updNewPostText={onPostChange} addPost={onClickAddPostHandler}
                    newPostText={props.store.getState().postsPage.newPostText}
                    // newPostText={props.newPostText}
       />
    )
}