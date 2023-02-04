import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div className="posts">
                My Posts
                <div>
                    New post
                </div>
                <Post title={'Post number 1'}/>
                <Post title={'Post number 2'}/>
                <Post title={'Post number 3'}/>
            </div>
        </div>
    )
}