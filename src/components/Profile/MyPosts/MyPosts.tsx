import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Posts/Post";
import {PostsType} from "../../../redax/state";

type MyPostsPropsType = {
    posts:Array<PostsType>
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostChange: (newText: string) => void
}

// export type PostsType = {
//     id:number
//     message:string
//     likesCount:number
// }

const MyPosts = (props:MyPostsPropsType) => {
    let postsElements = props.posts.map(p=><Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (newPostElement.current) {
            props.addPost()
           props.updateNewPostChange('')
        }
    }

let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostChange(text)
}}

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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