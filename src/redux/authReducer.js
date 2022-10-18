import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERRORS = 'SET_ERRORS';

export const setUserData = (data) => {
    return {type: SET_USER_DATA, data}; // tyt setLogin(data)
}

export const setErrors = (data) => {
    return {type: SET_ERRORS, data}; // tyt setLogin(data)
}

export const isAuthThunkCreator = () => {
    return async (dispatch) => {
        let response = await authAPI.isAuth();
        //return authAPI.isAuth()
            //.then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(response.data));
                }
            //})
    }
}
export const setAuthThunkCreator = (login, password) => {
    return async (dispatch) => {
        let response = await authAPI.login(login, password)
            //.then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(isAuthThunkCreator());
                } else {
                    dispatch(setErrors(response.data.messages));
                }
            //})
    }
}

export const delAuthThunkCreator = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
            //.then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null))
                }
            //})
    }
}

let initUsers = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    errors: null
};

let authReducer = (state = initUsers, action) => {
    if (action.type === SET_USER_DATA) {
        if (!state.isAuth) {
            return {
                ...state,
                userId: action.data.data.id,
                login: action.data.data.login,
                email: action.data.data.email,
                isAuth: true
            }
        } else if (!action.data) {
            return {
                ...state,
                login : null,
                email : null,
                userId: null,
                isAuth: false
            }
        }
    } else if (action.type === SET_ERRORS) {
        return {
            ...state,
            errors : action.data[0]
        }
    }
    return state;
}
export default authReducer;