import React from "react";

export const ProfileInfo = () => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPostHandler = () => {
        console.log(newPostElement.current?.value)
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