import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const MyPosts = () => {
    let PostsData = [
        {id: 1, post: 'Hello, it is my first post', likeCount: 23},
        {id: 2, post: 'Where are you?', likeCount: 56},
        {id: 3, post: 'I need new phone', likeCount: 2},
        {id: 4, post: 'What did you say?', likeCount: 99},

    ]
    return (
        <div className={s.posts}>

            <ProfileInfo />
            {/*<Post message={'Hello, it is my first post'} likeCount={23}/>*/}
            {/*<Post message={'Where are you?'} likeCount={4}/>*/}
            {/*<Post message={'I need a new phone'} likeCount={12}/>*/}
            {
                PostsData.map((el)=> el.)
            }
            <Post message={'I need a new phone'} likeCount={12}/>
        </div>
    )
}