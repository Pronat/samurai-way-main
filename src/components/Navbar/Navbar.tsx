
import React from 'react';
import s from "./Navbar.module.css";

console.log(s);
let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s.item} ${s.active}`;

type NavbarPropsType = {
    textNavbar: string;
}
const Navbar = (props: NavbarPropsType) => {
debugger
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                {props.textNavbar}
            </div>
            <div className={s.item}>
                <a href="/profile">Profile</a>
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