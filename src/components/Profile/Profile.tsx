import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
    type3: string;
}
const Profile = (props: ProfilePropsType) => {
    return (

        <div className={style.content}>

            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt={"no Photo"}/>
            </div>
            <div>
                {props.type3}
            </div>
            <div>

                <div>
                    ava + descript
                </div>
            </div>
            <MyPosts type3={"Пропсы в постах"} />

        </div>
    )
}

export default Profile;