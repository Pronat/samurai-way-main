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

            <Post message={'Hello, it is my first post'} likeCount={23}/>
            <Post message={'Where are you?'} likeCount={4}/>
            <Post message={'I need a new phone'} likeCount={12}/>
        </div>
    )
}