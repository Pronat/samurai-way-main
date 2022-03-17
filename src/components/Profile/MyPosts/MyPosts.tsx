import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = () => {
    debugger
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
                <Post message={"It's my first post"} likesCount={4}/>
                <Post message={"Hello, how are you"} likesCount={10}/>
                <Post message={"What happening"} likesCount={2}/>
                <Post message={"What would we do?"} likesCount={18}/>
            </div>
        </div>
    )
}


export default MyPosts;