const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

export const ActionAddMessage = (textMessage) => {
    return {type: ADD_MESSAGE, textMessage};
}
export const ActionChangeMessageText = (text) => {
    return {type: CHANGE_MESSAGE_TEXT, messageText: text};
}

let initDialogs = {
    messageText: '',
    dialogUserData : [
        {id: 1, userId: 41234, name: 'Mops', surname: 'Novic', time: '12:35', avatar: 'https://tntmusic.ru/media/content/article/2018-07-23_13-39-09__c6ad796c-8e7d-11e8-8f7f-81b45a60fe41.jpg'},
        {id: 2, userId: 53444, name: 'Mopsi', surname: 'Novic', time: '12:35', avatar: 'https://tntmusic.ru/media/content/article/2018-07-23_13-39-09__c6ad796c-8e7d-11e8-8f7f-81b45a60fe41.jpg'}
    ],
    messagesData : {
        1 : [
            {id: 1, message: 'Lorem is impulse'},
            {id: 2, message: 'Ku gow are u?'},
            {id: 3, message: '1Hi'}
        ],
        2 : [
            {id: 1, message: 'Lorem is impulse'},
            {id: 2, message: 'Ku gow are u?'},
            {id: 3, message: '2erberbreb'}
        ],
        3 : [
            {id: 1, message: 'Lorem is impulse'},
            {id: 2, message: 'Ku gow are u?'},
            {id: 3, message: '3yytrqvbrber'}
        ]
    }
};

let dialogsReducer = (state = initDialogs, action) => {
    let stateClone = {...state};
    if (action.type === ADD_MESSAGE) {
        stateClone.messagesData = {...state.messagesData}
        stateClone.messagesData[1] = [...state.messagesData[1]]
        stateClone.messagesData[1].push({id: 1, message: action.textMessage});
        // return {
        //     ...state,
        //     ...state.messagesData[1].push({id: 1, message: action.textMessage}),
        //     ...state.messageText = ''
        // }
        //state.messagesData[1].push({id: 1, message: action.textMessage});
        stateClone.messageText = '';
    } else if (action.type === CHANGE_MESSAGE_TEXT) {
        stateClone.messageText = action.messageText;
    }
    return stateClone;
}

export default dialogsReducer;