import s from "./Dialogs.module.css";
import React from "react";
import {ActionsType} from "../../redux/state";

type MessageType = {
    message: string
    // addMessage: (message: string)=>void
    dispatch: (action: ActionsType) => void


}
export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            <img src={'https://emojio.ru/images/apple-b/12.0/1f7e2.png'}/>
            <span>{props.message}</span>
        </div>
    )
}