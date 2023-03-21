import React from 'react';
import {addMessageActionCreator, updNewMessageActionCreator} from "../../redux/profilePageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, DialogsDataType, MessagesType, StatePropsType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";

// type DialogsContainerPropsType = {
// }

// const DialogsContainer = (props: DialogsContainerPropsType) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const onClickAddMessageHandler = () => {
//                         store.dispatch(addMessageActionCreator())
//                     }
//                     const onChangeNewMessageText = (messageText: string) => {
//                        store.dispatch(updNewMessageActionCreator(messageText))
//                     }
//                     return (
//                         <Dialogs
//                             updNewMessage={onChangeNewMessageText}
//                             addMessage={onClickAddMessageHandler}
//                             messages={store.getState().profilePage.messages}
//                             newMessageText={store.getState().profilePage.newMessageText}
//                             dispatch={store.dispatch}
//                             DialogsData={store.getState().profilePage.DialogsData}
//                         />
//                     )
//                 }
//
//
//
//             }
//         </StoreContext.Consumer>
//     );
// };

type MapStateToPropsType = {
    DialogsData: Array<DialogsDataType>
    messages: Array<MessagesType>
    newMessageText: string
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        DialogsData: state.profilePage.DialogsData,
        messages:state.profilePage.messages,
        newMessageText: state.profilePage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        updNewMessage: (messageText: string) => {dispatch(updNewMessageActionCreator(messageText))},
        addMessage: () => {dispatch(addMessageActionCreator())},
        dispatch: dispatch
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer