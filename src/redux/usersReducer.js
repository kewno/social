import {usersAPI} from "../api/api";

const TOGGLE_FOLLOWED = 'TOGGLE_FOLLOWED';
const ADD_USERS = 'ADD_USERS';
const SET_COUNT_USERS = 'SET_COUNT_USERS';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';

export const toggleFollowed = (id) => {
    return {type: TOGGLE_FOLLOWED, userId: id}; // tyt
}
export const addUsers = (user) => {
    return {type: ADD_USERS, user};
}
export const setCountUsers = (count) => {
    return {type: SET_COUNT_USERS, count};
}
export const setActivePage = (idPage) => {
    return {type: SET_ACTIVE_PAGE, idPage}
}
export const toggleFetching = () => {
    return {type: TOGGLE_FETCHING}
}
export const toggleFollowingProgress = (followingProgress, userId) => {
    return {type: FOLLOWING_PROGRESS, followingProgress, userId}
}

export const getUsersThunkCreator = (countPage, sizeUserOfPage) => {
    return async (dispatch) => {
        let response = await usersAPI.getUsers(countPage, sizeUserOfPage)
        //.then(data => { //, { withCredentials: true }select *, name from cinemas
            dispatch(addUsers(response.items));
            dispatch(setCountUsers(response.totalCount));
            dispatch(toggleFetching());
        //}) select name from cinemas WHERE id = ANY (select idCinema from favorites_cinemas where idUser = 1)
        //выборка данных фильма о избранных пользователя с id = 1
    } //select cinemas.name, favorites_cinemas.idCinema from cinemas, favorites_cinemas WHERE cinemas.id = ANY (select idCinema from favorites_cinemas where idUser = 1)
    // с дубликатами
    //select cinemas.name, favorites_cinemas.idUser from cinemas INNER JOIN favorites_cinemas ON favorites_cinemas.idUser = 1 and cinemas.id = ANY (select idCinema from favorites_cinemas where idUser = 1)
}

export const getUsersPageThunkCreator = (idPage, sizeUserOfPage) => {
    return async (dispatch) => {
        dispatch(setActivePage(idPage));
        dispatch(toggleFetching());
        let response = await usersAPI.getUsers(idPage, sizeUserOfPage)
            //.then(data => {
                dispatch(addUsers(response.items));
                dispatch(setCountUsers(response.totalCount));
                dispatch(toggleFetching());
            //})
    }
}

export const subscribeUserThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.subscribeUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollowed(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unsubscribeUserThunkCreator = (idUser) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, idUser))
        usersAPI.unsubscribeUser(idUser)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollowed(idUser))
                }
                dispatch(toggleFollowingProgress(false, idUser))
            })
    }
}

let initUsers = {
    users: [],
    countUsers: 0,
    countPage: 1,
    activePage: 1,
    sizeUserOfPage: 100,
    isFetching: true,
    followingProgress: []
};

let usersReducer = (state = initUsers, action) => {
    if (action.type === TOGGLE_FOLLOWED) {
        return {
            ...state,
            users : state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: !u.followed}
                }
                return u;
        }) }
    } else if (action.type === ADD_USERS) {
        return {...state, users : [...action.user]}
    } else if (action.type === SET_COUNT_USERS) {
        return {...state, countUsers: action.count}
    } else if (action.type === SET_ACTIVE_PAGE) {
        return {...state, activePage: action.idPage}
    } else if (action.type === TOGGLE_FETCHING) {
        return {...state, isFetching: !state.isFetching}
    } else if (action.type === FOLLOWING_PROGRESS) {
        //debugger
        return {
            ...state,
            followingProgress : action.followingProgress
                ? [...state.followingProgress, action.userId]
                : state.followingProgress.filter(id => id !== action.userId)
            //state.following
            // InProgress[action.userId] = state.followingInProgress
        }
    }
    return state;
}
export default usersReducer;