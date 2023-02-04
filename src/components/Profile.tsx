import React from "react";


import './Profile.css';
export const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>
            <div>
                <img style={{width: '130px'}}
                     src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg"/>
            </div>
            <div>
                My Posts
                <div>
                    New post
                </div>
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>
            </div>
        </div>
    )
}