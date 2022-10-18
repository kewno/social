import React, {Component} from 'react';
import s from './Dialogs.module.scss';
import {BrowserRouter, Route} from "react-router-dom"
import Message from "./Message/Message";
import DialogUser from "./DialogUser/DialogUser";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
//import Switch from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.wraper}>
            <p>{props.dialogs.avatar}</p>
            <div className={s.dialogs}>
                {props.dialogs.map((el) => {
                    return <DialogUser id={el.id} src={el.avatar} name={el.name} timeLastMessaage={el.time}/>
                })}
            </div>

                <div className={s.messages}>
                    {props.messages.map((el) => {
                         return <Message message={el.message}/>
                     })}
                    <AddMessageForm addMessage={props.addMessage}/>
                    {/*<textarea value={props.messageText} onChange={props.changeMessage} cols="80"/>*/}
                    {/*<button onClick={() => props.addMessage('123')}>AddMessage</button>*/}
                </div>


        </div>
    )
}

export default Dialogs;