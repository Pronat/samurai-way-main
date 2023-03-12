import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogType = {
    name: string
    id: number
}
export const Dialog = (props: DialogType) => {
    return (
        <div className={`${s.name} ${s.active}`}>
            <img src={'https://img.freepik.com/premium-vector/person-avatar-design_24877-38133.jpg'}/>
            <NavLink to={`/message/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}