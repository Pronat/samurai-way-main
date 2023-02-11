import React from 'react';
import s from './Dialogs.module.css'

type DialogsType = {

}
const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogsPage}>
            <div className={s.names}>
                <div className={s.name}>Alex</div>
                <div className={s.name}>Svetlana</div>
                <div className={s.name}>Burton</div>
                <div className={s.name}>Olaf</div>
                <div className={s.name}>Olga</div>
                <div className={s.name}>Brendon</div>
                <div className={s.name}>Nikita</div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hello my friend</div>
                <div className={s.message}>What are you doing?</div>
                <div className={s.message}>What time is it?</div>
                <div className={s.message}>Do you have any problems?</div>
                <div className={s.message}>What did you say?</div>
            </div>

        </div>
    );
};

export default Dialogs