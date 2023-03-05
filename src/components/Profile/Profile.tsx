import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {} from "../../index";
import {PostsDataType} from "../../redux/state";

type ProfileType = {
    PostsData: Array<PostsDataType>
    newPostText: string
    addPost: ()=>void
    updateNewPostText: (newText: string)=>void
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>
            <MyPosts
                PostsData={props.PostsData}
                newPostText={props.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

