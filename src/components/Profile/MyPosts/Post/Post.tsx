import React from "react";
import s from '../MyPosts.module.css';

export const Post = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>
            <div>
                <img  className={s.profileAvatarImg} src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg"/>
            </div>
            <div className="posts">
                My Posts
                <div>
                    New post
                </div>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
                <div className={s.item}>Post 3</div>
            </div>
        </div>
    )
}