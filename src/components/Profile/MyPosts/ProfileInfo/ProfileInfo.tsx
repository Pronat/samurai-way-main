import React from "react";

export type ProfileInfoType = {
    newPostText: string
    addPost: ()=> void
    updNewPostText: (text: string)=>void
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