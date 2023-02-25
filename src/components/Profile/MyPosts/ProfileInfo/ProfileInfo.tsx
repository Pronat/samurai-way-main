import React from "react";

export const ProfileInfo = () => {
    const onClickAddPostHandler = () => {
        console.log("assddff")
    }
    return (
        <div>
            <h2>My Posts</h2>
            <div>
                <textarea></textarea>
                <div>
                    <button onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>
        </div>

    )
}