
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css";

console.log(s);
let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s.item} ${s.active}`;

const Navbar = () => {
debugger
    return (
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink href="/profile">Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="/Dialogs">Messages</a>
            </div>
            <div className={s.item}>
                <a href="/News">News</a>
            </div>
            <div className={s.item}>
                <a href="/Music">Music</a>
            </div>
            <div className={s.item}>
                <a href="/Settings">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;