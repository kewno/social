import React, {Component} from 'react';
import s from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={s.wraper}>
            <div>
                <img className={s.avatar} src={props.src} alt="avatar"/>
            </div>
            <div>
                <p className={s.text}>{props.text}</p>
                <p className={s.like}>like: {props.collLike}</p>
            </div>
        </div>
    )
}

export default Post;