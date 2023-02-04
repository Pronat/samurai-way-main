import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div className="posts">
                My Posts
                <div>
                    <textarea />
                    <div>
                        <button>Create post</button>
                    </div>
                </div>
                <img className={s.avatarImg} src= 'https://www.blast.hk/attachments/64805/' />
                <Post title={'Post number 1'}/>
                <Post title={'Post number 2'}/>
                <Post title={'Post number 3'}/>
            </div>
        </div>
    )
}