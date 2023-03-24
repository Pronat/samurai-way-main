import React from "react";
import {Post} from "../Post/Post";
import s from "../MyPosts.module.css";
import {PostsDataType} from "../../../../redux/store";

export type ProfileInfoType = {
    newPostText: string
    addPost: ()=> void
    updNewPostText: (text: string)=>void
    PostsData: Array<PostsDataType>
}

export const ProfileInfo = (props: ProfileInfoType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPostHandler = () => {
        props.addPost()
    }
    const onPostChange = () => {
        const text = newPostElement.current?.value
        if (text) {
            props.updNewPostText(text)
        }
    }

    let postsElements = props.PostsData.map((el) => {
        return (
            <Post message={el.message} likeCount={el.likeCount}/>
        )
    })

    return (
        <div>

            <h2>My Posts</h2>

            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}></textarea>
                <div>
                    <button onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>
            <div  className={s.posts}>{postsElements}</div>
        </div>

    )
}