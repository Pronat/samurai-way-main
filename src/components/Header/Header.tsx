import s from './Header.module.css';

import React from "react";

export const Header = () => {
    return (
        <div className={s.header}>
            <img
                src={'https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/64250/optimized_large_thumb_stage.jpg'}/>
        </div>
    )
}