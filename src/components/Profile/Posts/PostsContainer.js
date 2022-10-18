import React, {Component} from 'react';
import {ActionAddPost, ActionChangePostText} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts : state.profilePage.postsData,
        postText : state.profilePage.postText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost(text) {
            dispatch(ActionAddPost(text));
        },
        updateNewPostText(e) {
            let text = e.target.value;
            dispatch(ActionChangePostText(text));
        }
    }
}

const PostsContainers = connect(mapStateToProps, mapDispatchToProps)(Posts);
// const PostsContainer = (props) => {
//
//     let addPost = () => {
//         props.store.dispatch(ActionAddPost());
//     }
//
//     let changePost = (e) => {
//         let text = e.target.value;
//         props.store.dispatch(ActionChangePostText(text));
//     }
//
//     return (
//         <Posts posts={props.store.getState().profilePage.postsData} postText={props.store.getState().profilePage.postText}
//         addPost={addPost} updateNewPostText={changePost}/>
//     )
// }

export default PostsContainers;