import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import StoreContext from "../../../StoreContext";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

type MyPostsType = {

}
export const MyPosts = (props: MyPostsType) => {


    return (
        <StoreContext.Consumer>
            {
                (store)=> {
                    let postsElements = store.getState().postsPage.PostsData.map((el) => {
                        return (
                            <Post message={el.message} likeCount={el.likeCount}/>
                        )
                    })
                    return (
                        <div className={s.posts}>
                            <ProfileInfoContainer
                            />
                            {
                                postsElements
                            }
                        </div>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}