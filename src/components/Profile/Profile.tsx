import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redax/state";

type ProfilePropsType = {
    posts:Array<PostsType>
    addPost: (postMessage: string) => void
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div className={style.content}>

            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} />

        </div>
    )
}

export default Profile;