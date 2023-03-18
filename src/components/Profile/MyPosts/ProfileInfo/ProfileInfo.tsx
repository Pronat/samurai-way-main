import React from "react";
import {
    ActionsType,
} from "../../../../redux/store";
import {addPostActionCreator, updNewPostActionCreator} from "../../../../redux/postsPageReducer";

export type ProfileInfoType = {
    newPostText: string
    // dispatch: (action: ActionsType) => void
    addPost: ()=> void
    updNewPostText: (text: string)=>void
}

export const ProfileInfo = (props: ProfileInfoType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPostHandler = () => {
        // props.dispatch(addPostActionCreator())
        props.addPost()
    }
    const onPostChange = () => {
        const text = newPostElement.current?.value
        if (text) {
             // props.dispatch(updNewPostActionCreator(text))
            props.updNewPostText(text)
        }
    }

    return (
        <div>
            <h2>My Posts</h2>

            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}></textarea>
                <div>
                    <button onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>
        </div>

    )
}