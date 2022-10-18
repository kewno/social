import React from 'react';
import Paginator from "../../compose/Paginator/Paginator";
import User from "./User/User";

const Users = (props) => {
    return (

        <div>
            <Paginator {...props}/>
            {/*{pages.map((el) => {*/}
            {/*    return <span onClick={() => props.getUsers(el)} className={props.activePage === el ? s.paginationElemActive : s.paginationElem}>{el}</span>*/}
            {/*})}*/}
            {props.users.map(el => <User user={el}
                                        followingProgress={props.followingProgress}
                                        followed={props.followed}
                                        subscribeUserThunkCreator={props.subscribeUserThunkCreator}
                                         unsubscribeUserThunkCreator={props.unsubscribeUserThunkCreator}/>
                // <div key={el.id}>
                //     <NavLink to={`/profile/${el.id}`}>
                //         <img src={el.photos.small == null ? avatar : el.photos.small} alt="Avatar"/>
                //     </NavLink>
                //     <h3>{el.name}</h3>
                //     <p>{el.status}</p>
                //     <button disabled={props.followingProgress.some(id => id === el.id)} onClick={() => el.followed ? unsubscribe(el.id) : subscribe(el.id)}>{el.followed ? 'Unsubscribe' : 'Subscribe'}</button>
                // </div>
            )}
        </div>
    )
}

export default Users;