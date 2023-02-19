import React from 'react';

type DialogItemType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemType) => {
    return (
        <div>
            {
               `${props.id} - ${props.name}`
            }
        </div>
    );
};

export default DialogItem;