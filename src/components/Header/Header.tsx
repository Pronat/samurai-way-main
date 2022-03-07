import React from 'react';
import s from './Header.module.css';

type HeaderPropsType = {
    type1: string;
}
const Header = (props: HeaderPropsType) => {
    return (

        <header className={s.header}>
            <div>{props.type1}</div>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo-700x394.png" alt={"no Photo"}/>
        </header>
    )
}
export default Header;