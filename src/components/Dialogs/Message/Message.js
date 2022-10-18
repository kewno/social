import React, {Component} from 'react';
import s from './Message.module.scss';

const Message = (props) => {
    return (
        <div className={s.messagesItem}>
            <img className={s.avatar} src="https://images11.esquire.ru/upload/img_cache/c24/c243a3f784d9203f6e17d519a859ada5_ce_964x601x0x296_cropped_960x600.jpg" alt="userAvatar"/>
            <div className={s.wrapText}>
                <p className={s.name}>SirGay</p>
                <p className={s.message}>{props.message}</p>
            </div>
            <p className={s.time}>08:12</p>
        </div>
    )
}

export default Message;