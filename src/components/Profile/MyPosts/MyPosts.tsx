import React from "react";
import s from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div>
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