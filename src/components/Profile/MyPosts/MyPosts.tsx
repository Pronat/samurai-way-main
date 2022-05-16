import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Posts/Post";
import {ActionsTypes, addPostActionCreator, changeNewTextAC, PostsType} from "../../../redax/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
    // addPost: (postMessage: string) => void
    newPostText: string
    // updateNewPostChange: (newText: string) => void
    dispatch: (action: ActionsTypes)=>void
}

// let addPostActionCreator = () => {
//     return {
//         type: 'ADD-POST'
//     }
// }
// let updateNewPostTextActionCreator = () => {
//     return {
//         type: 'ADD-POST'
//     }
// }

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (newPostElement.current) {
            // props.dispatch({type: 'ADD-POST', postText: props.newPostText})
            props.dispatch(addPostActionCreator(props.newPostText))
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: props.newPostText})
            let action = changeNewTextAC(text)
            props.dispatch(action)
        }
    }

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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