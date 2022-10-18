import React, {Component} from 'react';
import s from './Sidebar.module.scss';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends.js";

let activeLink = ({isActive}) => isActive ? s.active : s.item;

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <nav>
                <ul>
                    <NavLink to='/profile' className={activeLink}>Mains</NavLink>
                    <NavLink to='/dialogs' className={activeLink}>Messages</NavLink>
                    <NavLink to='/users' className={activeLink}>Users</NavLink>
                    <NavLink to='/profile' className={activeLink}>Nationals</NavLink>
                    <NavLink to='/profile' className={activeLink}>Portfolio</NavLink>
                </ul>
            </nav>
            <Friends/>
        </div>
    )
}

export default Sidebar;