import React, {Component} from 'react';
import Friend from "./Friend/Friend";
import s from './Friends.module.scss';

const Friends = () => {
    return (
        <div className={s.container}>
            <Friend/>
            <Friend/>
            <Friend/>
        </div>
    )
}

export default Friends;