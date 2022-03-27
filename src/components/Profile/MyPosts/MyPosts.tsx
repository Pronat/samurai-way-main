import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = () => {
    debugger
    let posts = [
        {id:1, message:"It's my first post", likesCount:4},
        {id:2, message:"Hello, how are you", likesCount:10},
        {id:3, message:"What happening", likesCount:2},
        {id:4, message:"What would we do?", likesCount:18},
        {id:5, message:"Here is my moto!", likesCount:18},
    ]

    let postsElements = posts.map(p=><Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.item}>
            </div>
            <div className={style.item}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts;