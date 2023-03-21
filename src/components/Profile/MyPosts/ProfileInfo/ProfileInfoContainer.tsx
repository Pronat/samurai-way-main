import React from "react";
import {
    ActionsType, StoreRootStateType,
} from "../../../../redux/store";
import {addPostActionCreator, updNewPostActionCreator} from "../../../../redux/postsPageReducer";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import Dialogs from "../../../Dialogs/Dialogs";

export type ProfileInfoContainerType = {
    store: StoreRootStateType
}

// const ProfileInfoContainer = (props: ProfileInfoContainerType) => {
//     const onClickAddPostHandler = () => {
//         props.store.dispatch(addPostActionCreator())
//
//     }
//     const onPostChange = (text: string) => {
//
//         props.store.dispatch(updNewPostActionCreator(text))
//     }
//
//     return (
//         <ProfileInfo
//             updNewPostText={onPostChange}
//             addPost={onClickAddPostHandler}
//             newPostText={props.store.getState().postsPage.newPostText}
//         />
//     )
// }

let mapStateToProps = () => {
    return {

    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {

    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)
export default ProfileInfoContainer