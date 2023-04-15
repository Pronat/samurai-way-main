import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";


export type NavBarType = {
}
export const NavBar = (props: NavBarType) => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/message'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/users'} activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.item2}`}>
                <NavLink to={'/friends'} activeClassName={s.activeLink}>Friends</NavLink>
            </div>

            {/*{*/}
            {/*    props.siteBar.map((el) => {*/}
            {/*        return (*/}
            {/*            <span  className={s.friend}>*/}
            {/*            <span key={el.id}>*/}

            {/*                {el.name}*/}
            {/*            </span>*/}
            {/*        <div className={s.Circle}></div>*/}
            {/*            </span>*/}
            {/*            )*/}
            {/*    })*/}
            {/*}*/}
        </div>
    )
}