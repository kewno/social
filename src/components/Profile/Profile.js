import React from 'react';
import s from './Profile.module.scss';
import ProfileUser from "./ProfileUser/ProfileUser.js";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={s.wraper}>
            <img className={s.poster} src="https://muzh-zhena.ru/wp-content/uploads/2019/03/Pasha-Tehnik-foto.jpg"
                 alt=""/>
            <ProfileUser {...props}/>

            <PostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;