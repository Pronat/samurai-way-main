import React from "react";
import s from './Post.module.css';

export type PostPropsType = {
    message: string
    like: number
}
export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src={' https://www.blast.hk/attachments/64805/'}/>
            <div> {props.message}</div>
            <div>{`likes: ${props.like}`}</div>
        </div>
    )
}