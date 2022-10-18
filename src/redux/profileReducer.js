import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const GET_STATUS_USER = 'GET_STATUS_USER';
const SET_STATUS_USER = 'SET_STATUS_USER';

export const ActionAddPost = (postText) => {
    return {type: ADD_POST, postText};
}
export const ActionChangePostText = (text) => {
    return {type: CHANGE_POST_TEXT, postText: text};
}
export const setProfileUser = (profileUser) => {
    return {type: SET_PROFILE_USER, profileUser};
}

export const setDataUserThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getDataUser(userId)
            //.then(response => {
                dispatch(setProfileUser(response.data));
            //})
    }
}
export const setStatusUser = (status) => {
    return {type: SET_STATUS_USER, status};
}
export const getStatusUserThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
            //.then(response => {
                dispatch(setStatusUser(response.data));
            //})
    }
}

export const setStatusUserThunkCreator = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.putStatus(status)
            //.then(response => {
                //debugger
                dispatch(setStatusUser(response.data));
            //})
    }
}

let initProfile = {
    postText: '',
    postsData: [
        {id: 1, text: 'Sirgay', collLike: '12', src: 'https://static.wikia.nocookie.net/battleraprus/images/a/a7/Pasha_Texnik.jpg/revision/latest/top-crop/width/360/height/450?cb=20200324190149&path-prefix=ru'},
        {id: 2, text: 'Alex', collLike: '12', src: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/07/96/58/72/09/a03fe2240cd7.jpg'},
        {id: 3, text: 'Payl', collLike: '12', src: 'https://n1s2.starhit.ru/7d/7d/ed/7d7ded52c7725b2055f2b16e6d51b52e/480x496_0_fa5547708217fa562832f08c20e22bf7@480x496_0xac120003_21289719361598020701.jpg'}
    ],
    profileUser: null,
    statusUser: ""
};

let profileReducer = (state = initProfile, action) => {
    let stateClone = {...state};
    if (action.type === ADD_POST) {
        stateClone.postsData = [...state.postsData];
        stateClone.postsData.push({
            id: 2,
            text: action.postText,
            collLike: '12',
            src: 'https://i.pinimg.com/736x/34/db/86/34db86843067d26b2eb50392a404aeb8.jpg'
        });
        stateClone.postText = '';
    } else if (action.type === CHANGE_POST_TEXT) {
        stateClone.postText = action.postText;
    } else if (action.type === SET_PROFILE_USER) {
        stateClone.profileUser = action.profileUser;
    } else if (action.type === GET_STATUS_USER) {
        stateClone.statusUser = action.status;
    } else if (action.type === SET_STATUS_USER) {
        stateClone.statusUser = action.status;
    }

    return stateClone;
}
export default profileReducer;