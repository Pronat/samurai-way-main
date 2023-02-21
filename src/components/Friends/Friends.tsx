import React from 'react';
import {SiteBarType} from "../../redux/state";
export type FriendsType = {
    siteBar:  SiteBarType
}
const Friends = (Props: FriendsType) => {
    return (
        <div>
            Friends page
        </div>
    );
};

export default Friends;