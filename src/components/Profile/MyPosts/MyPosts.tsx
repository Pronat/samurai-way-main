import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfileInfoContainer} from "./ProfileInfo/ProfileInfoContainer";
import StoreContext from "../../../StoreContext";

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
                            <ProfileInfoContainer store={store}
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