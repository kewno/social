import React from 'react';
import s from "./Header.module.scss"
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header>
            <img src="https://i1.sndcdn.com/artworks-000631586848-vfch1p-t500x500.jpg" alt="logo"/>
            {/*{props.dataUser.isAuth ? props.dataUser.email : "123"}*/}
            {props.isAuth ? <div className={s.wrapLogin}>
                    <button onClick={() => {props.delAuthThunkCreator()}}>Log out</button>
                    {props.loginUser}
                </div>
                 :
                <NavLink to={'/login/'}>
                Login
                </NavLink>

            }
        </header>
    )
}

export default Header;