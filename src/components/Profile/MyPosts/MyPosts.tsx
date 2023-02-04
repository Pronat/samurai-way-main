import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
            <div>
                <textarea/>
                <div>
                    <button>Create post</button>
                </div>
            </div>
            <div className={s.item}>
                <img src={' https://www.blast.hk/attachments/64805/'} />
            </div>

            <Post title={'Post number 1'}/>
            <Post title={'Post number 2'}/>
            <Post title={'Post number 3'}/>
        </div>
    )
}