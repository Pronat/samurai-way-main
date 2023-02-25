import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {} from "../../index";
import {PostsDataType} from "../../redux/state";

type ProfileType = {
    PostsData: Array<PostsDataType>
    addPost: (post: string)=>void
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>
            <MyPosts PostsData={props.PostsData} addPost={props.addPost}/>
        </div>
    )
}

