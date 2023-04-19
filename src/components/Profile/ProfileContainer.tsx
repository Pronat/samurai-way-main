import React from "react";
import ProfileInfoContainer from "./MyPosts/ProfileInfo/ProfileInfoContainer";


type ProfileType = {
}

class ProfileContainer {
    render() {
    return (
        <div>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>
            <ProfileInfoContainer />
        </div>
    )
}}

