import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {SiteBarType} from "../../redux/state";

export type NavBarType = {
    siteBar: Array<SiteBarType>
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

            {
                props.siteBar.map((el) => {
                    return (
                        <div key={el.id}>
                            <div className={s.Circle}></div>
                            {el.name}
                        </div>
                        )
                })
            }
        </div>
    )
}