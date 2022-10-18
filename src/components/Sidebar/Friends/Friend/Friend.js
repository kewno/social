import React, {Component} from 'react';
import s from './Friend.module.scss';

const Friend = () => {
    return (
        <div className={s.wrap}>
            <img src="https://n1s2.starhit.ru/7d/7d/ed/7d7ded52c7725b2055f2b16e6d51b52e/480x496_0_fa5547708217fa562832f08c20e22bf7@480x496_0xac120003_21289719361598020701.jpg" alt=""/>
            <p className={s.name}>Павел</p>
        </div>
    )
}

export default Friend;