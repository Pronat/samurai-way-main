import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {} from "../../index";
import {ActionsType, PostsDataType} from "../../redux/store";

type ProfileType = {
    PostsData: Array<PostsDataType>
    newPostText: string
    // addPost: ()=>void
    // updateNewPostText: (newText: string)=>void
    dispatch: (action: ActionsType) => void
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
                dispatch={props.dispatch}
            />
        </div>
    )
}

