import React from 'react';
import avatar from "../../../../Image/ava.png";
import {NavLink} from "react-router-dom";

const User = (props) => {
    function subscribe(userId) {
        props.subscribeUserThunkCreator(userId)
    }
    function unsubscribe(userId) {
        props.unsubscribeUserThunkCreator(userId)
    }

    return (
            <div key={props.user.id}>
                <NavLink to={`/profile/${props.user.id}`}>
                    <img src={props.user.photos.small == null ? avatar : props.user.photos.small} alt="Avatar"/>
                </NavLink>
                <h3>{props.user.name}</h3>
                <p>{props.user.status}</p>
                <button disabled={props.followingProgress.some(id => id === props.user.id)} onClick={() => props.user.followed ? unsubscribe(props.user.id) : subscribe(props.user.id)}>{props.user.followed ? 'Unsubscribe' : 'Subscribe'}</button>
            </div>
    )
}

export default User;