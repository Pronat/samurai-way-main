import React from "react";
import s from './MyPosts/MyPosts.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>
            <div>
                <img  className={s.profileAvatarImg} src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg"/>
            </div>
            <MyPosts />
        </div>
    )
}