import React from "react";
import {addPostActionCreator, updNewPostActionCreator} from "../../../../redux/postsPageReducer";
import {ProfileInfo} from "./ProfileInfo";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";



let mapStateToProps = (state: AppStateType) => {
    return {
        newPostText: state.postsPage.newPostText,
        PostsData: state.postsPage.PostsData,
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