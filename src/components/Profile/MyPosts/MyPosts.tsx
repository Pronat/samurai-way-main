import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {} from "../../../index";
import {StoreRootStateType} from "../../../redux/store";
import {ProfileInfoContainer} from "./ProfileInfo/ProfileInfoContainer";

type MyPostsType = {
    store: StoreRootStateType
}
export const MyPosts = (props: MyPostsType) => {
    let postsElements = props.store.getState().postsPage.PostsData.map((el) => {
        return (
            <Post message={el.message} likeCount={el.likeCount}/>
        )
    })

    return (
        <div className={s.posts}>
            <ProfileInfoContainer store={props.store}
            />
            {
                postsElements
            }

        </div>
    )
}