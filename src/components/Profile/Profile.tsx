import React from 'react';
import style from './Profile.module.css';
import MyPosts, {PostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    posts:Array<PostsType>
}

const Profile = (props:ProfilePropsType) => {

    return (

        <div className={style.content}>

            <ProfileInfo />
            <MyPosts posts={props.posts}  />

        </div>
    )
}

export default Profile;