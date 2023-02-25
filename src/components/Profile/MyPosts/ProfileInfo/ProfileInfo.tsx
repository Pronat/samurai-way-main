import React from "react";

export const ProfileInfo = () => {
    const onClickAddPostHandler = () => {

    }
    const onChangeHandler = () => {

    }
    return (
        <div>
            <h2>My Posts</h2>
            <div>
                <textarea onChange={(e)=>{onChangeHandler(e)}}></textarea>
                <div>
                    <button onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>
        </div>

    )
}