import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../../index";
import {PostsDataType} from "../../../redux/state";

type MyPostsType = {
    PostsData: Array<PostsDataType>
    newPostText: string
    addPost: (post: string)=>void
}
export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.PostsData.map((el) => {
        return (
            <Post message={el.message} likeCount={el.likeCount}/>
        )
    })

    return (
        <div className={s.posts}>

            <ProfileInfo addPost={props.addPost} newPostText={props.newPostText}/>
            {
                postsElements
            }

        </div>
    )
}