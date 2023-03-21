import React from "react";
import {addPostActionCreator, updNewPostActionCreator} from "../../../../redux/postsPageReducer";
import {ProfileInfo} from "./ProfileInfo";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

// export type ProfileInfoContainerType = {
//     store: StoreRootStateType
// }

// const ProfileInfoContainer = (props: ProfileInfoContainerType) => {
//     const onClickAddPostHandler = () => {
//         props.store.dispatch(addPostActionCreator())
//
//     }
//     const onPostChange = (text: string) => {
//
//         props.store.dispatch(updNewPostActionCreator(text))
//     }
//     return (
//         <ProfileInfo
//             updNewPostText={onPostChange}
//             addPost={onClickAddPostHandler}
//             newPostText={props.store.getState().postsPage.newPostText}
//         />
//     )
// }


let mapStateToProps = (state: AppStateType) => {
    debugger
    return {
        newPostText: state.postsPage.newPostText,
        PostsDataType: state.postsPage.PostsData,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updNewPostText: (text: string) => {dispatch(updNewPostActionCreator(text))},
        addPost:() => {dispatch(addPostActionCreator())},
    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)



export default ProfileInfoContainer