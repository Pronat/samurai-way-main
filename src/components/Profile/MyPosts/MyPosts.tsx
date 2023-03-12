import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../../index";
import {ActionsType, PostsDataType} from "../../../redux/state";

type MyPostsType = {
    PostsData: Array<PostsDataType>
    newPostText: string
    // addPost: ()=>void
    // updateNewPostText: (newText: string)=>void
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

            {/*<ProfileInfo addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>*/}
            <ProfileInfo  newPostText={props.newPostText} dispatch={props.dispatch}/>
            {
                postsElements
            }

        </div>
    )
}