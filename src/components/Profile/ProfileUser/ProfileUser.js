import React, {Component} from 'react';
import s from './ProfileUser.module.scss';
import Preloader from "../../compose/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileUser = (props) => {
    if (!props.profileUser) return <Preloader/>
    return (
        <div className={s.wraper}>
            <img className={s.avatar} src={props.profileUser.photos.small} alt="avatar"/>
            <div> {/*"https://versusb.ru/wp-content/uploads/2018/04/pasha-tehnik-biografiya-1-400x400.jpg "*/}
                <p className={`${s.text} ${s.fio}`}>{props.profileUser.fullName || 'Ивлев'}</p>
                <p className={`${s.text} ${s.sity}`}>{props.profileUser.fullName}</p>
                <p className={`${s.text} ${s.webSite}`}>https://ivlew-pavel</p>
            </div>
            <ProfileStatusWithHooks {...props} />

        </div>
    )
}
//status={props.status} setStatusUserThunkCreator={props.setStatusUserThunkCreator}
export default ProfileUser;