
import React from 'react';
import s from "./Navbar.module.css";
// let s = {
//     'nav': 'Navbar_nav__00e8L',
//     'item': 'Navbar_item__SgK1I'
//      'active': 'Bgedgl_active'
// }
console.log(s);
let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s.item} ${s.active}`;

type NavbarPropsType = {
    type2: string;
}
const Navbar = (props: NavbarPropsType) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                {props.type2}
            </div>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;