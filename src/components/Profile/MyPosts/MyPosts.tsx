import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../../index";
import {ActionsType, PostsDataType, StoreRootStateType} from "../../../redux/store";
import {ProfileInfoContainer} from "./ProfileInfo/ProfileInfoContainer";

type MyPostsType = {
    store: StoreRootStateType
    PostsData: Array<PostsDataType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}
export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.PostsData.map((el) => {
        return (
            <Post message={el.message} likeCount={el.likeCount}/>
        )
    })

    return (
        <div className={s.posts}>

            {/*<ProfileInfo  newPostText={props.newPostText} dispatch={props.dispatch}/>*/}
            <ProfileInfoContainer store={props.store}  newPostText={props.newPostText} dispatch={props.dispatch}/>
            {
                postsElements
            }

        </div>
    )
}