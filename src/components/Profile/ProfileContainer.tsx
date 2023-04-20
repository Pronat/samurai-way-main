import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type ProfileType = {
}

class ProfileContainer extends React.Component<ProfileType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
    return (
        <Profile {...this.props}/>
    )
}}

let mapStateToProps = (state: AppStateType) => {
    return {
        a: 13
    }
}
export default connect(mapStateToProps, {
    setUserProfile
}) (ProfileContainer)

