import {isAuthThunkCreator} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

export const setInitialized = (isInit) => {
    return {type: SET_INITIALIZED, isInit}; // tyt setLogin(data)
}

export const initializedApp = () => {
    return (dispatch) => {
        let promise = dispatch(isAuthThunkCreator());
        promise.then(() => {
            dispatch(setInitialized(true))
        })
    }
}

let initApp = {
    initialized: false
};

let appReducer = (state = initApp, action) => {
    if (action.type === SET_INITIALIZED) {
        return {
            ...state,
            initialized: action.isInit
        }
    }
    return state;
}
export default appReducer;