import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {} from "../../index";
import { StoreRootStateType} from "../../redux/store";

type ProfileType = {
    store: StoreRootStateType
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>
            <MyPosts
                store={props.store}
            />
        </div>
    )
}

