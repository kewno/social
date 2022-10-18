import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state : {
        profilePage : {
            postText: '',
            postsData: [
                {id: 1, text: 'Sirgay', collLike: '12', src: 'https://static.wikia.nocookie.net/battleraprus/images/a/a7/Pasha_Texnik.jpg/revision/latest/top-crop/width/360/height/450?cb=20200324190149&path-prefix=ru'},
                {id: 2, text: 'Alex', collLike: '12', src: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/07/96/58/72/09/a03fe2240cd7.jpg'},
                {id: 3, text: 'Payl', collLike: '12', src: 'https://n1s2.starhit.ru/7d/7d/ed/7d7ded52c7725b2055f2b16e6d51b52e/480x496_0_fa5547708217fa562832f08c20e22bf7@480x496_0xac120003_21289719361598020701.jpg'}
            ]
        },
        dialogsPage : {
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
        }


    },

    getState() {
        return this._state;
    },

    // dispatch(action) {
    //     profileReducer(this.getState().profilePage, action);
    //     dialogsReducer(this.getState().dialogsPage, action);
    //
    //     this.renderAll();
    // },

    renderAll: null,

    subscribe(observer) {
        this.renderAll = observer;
    }

    // addPost() {
    //     this.state.postsData.push({id: 2, text: this.state.postText, collLike: '12', src: 'https://i.pinimg.com/736x/34/db/86/34db86843067d26b2eb50392a404aeb8.jpg'},);
    //     this.state.postText = '';
    //     renderAll();
    // },
    //
    // changePostText(postText) {
    //     this.state.postText = postText;
    //     renderAll();
    // },
    //
    // addMessage() {
    //     this.state.messagesData[1].push({id: 1, message: this.state.messageText});
    //     this.state.messageText = '';
    //     renderAll();
    // },
    //
    // changeMessageText(messageText) {
    //     this.state.messageText = messageText;
    //     renderAll();
    // }
};

export default store;