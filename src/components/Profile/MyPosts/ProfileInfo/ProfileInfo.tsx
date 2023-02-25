import React from "react";

export type ProfileInfoType = {
    addPost: (post: string)=>void
}
export const ProfileInfo = (props: ProfileInfoType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPostHandler = () => {
        props.addPost(newPostElement.current?.value ? newPostElement.current?.value : '---')
    }

    return (
        <div>
            <h2>My Posts</h2>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>
        </div>

    )
}