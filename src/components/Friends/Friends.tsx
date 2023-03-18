import React from 'react';
import {SiteBarType} from "../../redux/store";
import s from './Friends.module.css'


export type FriendsType = {
    siteBar: Array<SiteBarType>
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