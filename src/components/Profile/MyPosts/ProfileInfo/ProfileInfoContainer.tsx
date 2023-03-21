import React from "react";
import {
    ActionsType, StatePropsType,
} from "../../../../redux/store";
import {addPostActionCreator, updNewPostActionCreator} from "../../../../redux/postsPageReducer";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

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
//
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
        newPostText: state.postsPage.newPostText
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        updNewPostText: (text: string) => {dispatch(updNewPostActionCreator(text))},
        addPost:() => {dispatch(addPostActionCreator())},
        // dispatch: dispatch
}
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)
export default ProfileInfoContainer