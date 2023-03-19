import React from 'react';
import {StoreRootStateType} from "../../redux/store";
import s from './Friends.module.css'


export type FriendsType = {
    // store: StoreRootStateType
}
const Friends = (Props: FriendsType) => {
    return (
        <div>
            <div className={s.Circle}>
            </div>
        </div>

    );
};

export default Friends;