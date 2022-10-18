import React from 'react';
import s from './Posts.module.scss';
import Post from "./Post/Post.js";
import AddPostForm from "./AddPostForm/AddPostForm";

const Posts = React.memo(props => {
    console.log("123")
    return (
        <div className={s.wraper}>
            <div>
                <AddPostForm addPost={props.addPost}/>
            </div>
            {props.posts.map( (el) => <Post collLike={el.collLike} text={el.text} src={el.src}/>)}
        </div>
    )
})

export default Posts;