import React from "react";
import s from './Profile.module.css';

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
            <div className="posts">
                My Posts
                <div>
                    New post
                </div>
                <div className="item">Post 1</div>
                <div className="item">Post 2</div>
                <div className="item">Post 3</div>
            </div>
        </div>
    )
}