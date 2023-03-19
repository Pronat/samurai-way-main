import React from "react";
import {StoreRootStateType,
} from "../../../../redux/store";
import {addPostActionCreator, updNewPostActionCreator} from "../../../../redux/postsPageReducer";
import {ProfileInfo} from "./ProfileInfo";

export type ProfileInfoContainerType = {
    store: StoreRootStateType
}

export const ProfileInfoContainer = (props: ProfileInfoContainerType) => {
    const onClickAddPostHandler = () => {
        props.store.dispatch(addPostActionCreator())

    }
    const onPostChange = (text: string) => {

        props.store.dispatch(updNewPostActionCreator(text))
    }

    return (
        <ProfileInfo
            updNewPostText={onPostChange}
            addPost={onClickAddPostHandler}
            newPostText={props.store.getState().postsPage.newPostText}
        />
    )
}