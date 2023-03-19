import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";


type ProfileType = {
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>
            <MyPosts
            />
        </div>
    )
}

