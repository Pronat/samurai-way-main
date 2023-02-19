import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsDataType} from "../../index";

type ProfileType = {
    PostsData: Array<PostsDataType>
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>
            <MyPosts PostsData={props.PostsData}/>
        </div>
    )
}

