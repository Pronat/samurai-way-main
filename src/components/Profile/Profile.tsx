import React from 'react';
import style from './Profile.module.css';
import MyPosts, {PostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    posts:Array<PostsType>
}

const Profile = (props:ProfilePropsType) => {
    // let posts:Array<PostsType> = [
    //     {id:1, message:"It's my first post", likesCount:4},
    //     {id:2, message:"Hello, how are you", likesCount:10},
    //     {id:3, message:"What happening", likesCount:2},
    //     {id:4, message:"What would we do?", likesCount:18},
    //     {id:5, message:"Here is my moto!", likesCount:18},
    // ]
    return (

        <div className={style.content}>

            <ProfileInfo />
            <MyPosts posts={props.posts}  />

        </div>
    )
}

export default Profile;