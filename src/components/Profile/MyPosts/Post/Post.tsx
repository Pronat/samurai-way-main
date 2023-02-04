import React from "react";
import s from '../MyPosts.module.css';

export type PostPropsType = {
    title: string
}
export const Post = (props: PostPropsType) => {
    return (
                <div className={s.item}>
                    {props.title}
                </div>
    )
}