import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import StoreContext from "../../../StoreContext";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostActionCreator, updNewPostActionCreator} from "../../../redux/postsPageReducer";
import {connect} from "react-redux";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

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

// let mapStateToProps = (state: AppStateType) => {
//     debugger
//     return {
//         newPostText: state.postsPage.newPostText
//     }
// }
// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         updNewPostText: (text: string) => {dispatch(updNewPostActionCreator(text))},
//         addPost:() => {dispatch(addPostActionCreator())},
//         // dispatch: dispatch
//     }
// }
//
// const MyPosts = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default MyPosts