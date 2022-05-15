import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../redax/state";

type ProfilePropsType = {
    posts:Array<PostsType>
    // addPost: (postMessage: string) => void
    newPostText: string
    // updateNewPostChange: (newText: string) => void
    dispatch: (action: ActionsTypes)=>void
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div className={style.content}>

            <ProfileInfo />
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile;