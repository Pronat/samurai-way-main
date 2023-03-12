import React, {DetailedHTMLProps, TextareaHTMLAttributes} from "react";
import {ActionsType} from "../../../../redux/state";

export type ProfileInfoType = {
    // addPost: ()=>void
    newPostText: string
    // updateNewPostText: (newText: string)=>void
    dispatch: (action: ActionsType) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPostHandler = () => {
        // props.addPost()
        props.dispatch({type: "ADD-POST"})

    }
    const onPostChange = () => {
        const text = newPostElement.current?.value
        if (text) {
            // props.updateNewPostText(text)
             props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
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