import React from 'react';
import {ActionAddMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthChecked} from "../../hog/withAuthChecked";

let mapStateToProps = (state) => {
    return {
        dialogs : state.dialogsPage.dialogUserData,
        messages : state.dialogsPage.messagesData[1],
        messageText : state.dialogsPage.messageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage(text) {
            dispatch(ActionAddMessage(text));
        }
    }
}

const DialogsContainer = (props) => {
    return (
        <Dialogs {...props}/>
    )
}
export default withAuthChecked(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer));

// const DialogsContainers = (props) => {
//
//     let addPost = () => {
//         props.store.dispatch(ActionAddMessage());
//     }
//
//     let changeText = (e) => {
//         let text = e.target.value;
//         props.store.dispatch(ActionChangeMessageText(text));
//     }
//
//     return (
//         <Dialogs addPost={addPost}
//                  changeText={changeText}
//                  state={props.store.getState().dialogsPage}
//                  // messageText={props.store.getState().dialogsPage.messageText}
//                  // messagesData={props.store.getState().dialogsPage.messagesData}
//         />
//     )
// }

//export default DialogsContainer;