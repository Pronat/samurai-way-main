import React from "react";
import {ActionAddPostType, ActionsType, ActionUpdNewPostType} from "../../../../redux/state";

export type ProfileInfoType = {
    newPostText: string
    dispatch: (action: ActionsType) => void
}


const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
const  updNewPostActionCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT", newText: text
    }
}
export const ProfileInfo = (props: ProfileInfoType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPostHandler = () => {
        // props.dispatch({type: "ADD-POST"})
        props.dispatch(addPostActionCreator())

    }
    const onPostChange = () => {
        const text = newPostElement.current?.value
        if (text) {
             // props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
             props.dispatch(updNewPostActionCreator(text))
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