import React, {Component} from 'react';
import s from './DialogUser.module.scss';


const DialogUser = (props) => {
    return (
        // <div className={s.dialogsItem}>
            <div className={s.dialogsItem} >
                <img className={s.avatar} src={props.src} alt="avatar"/>
                <div className={s.wrapText}>
                    <p className={s.name}>{props.name}</p>
                    <p className={s.lastMessage}>Last Message</p>
                </div>
                <p className={s.timeLastMessage}>{props.timeLastMessage}</p>
            </div>
        // </div>
    )
}

export default DialogUser;