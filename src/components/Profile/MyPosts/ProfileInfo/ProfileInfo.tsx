import React, {DetailedHTMLProps, TextareaHTMLAttributes} from "react";

export type ProfileInfoType = {
    addPost: (post: string)=>void
    newPostText: string
    updateNewPostText: (newText: string)=>void
}
export const ProfileInfo = (props: ProfileInfoType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPostHandler = () => {
        const text = newPostElement.current?.value ? newPostElement.current?.value : '---'
        props.addPost(text)
        if (newPostElement.current?.value) {
            newPostElement.current.value = ""
        }

    }
    const onPostChange = () => {
        props.updateNewPostText(newPostElement.current?.value)
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