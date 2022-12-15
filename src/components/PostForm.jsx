import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', postText: ''});

    const addPost = (e) =>{
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({title: '', postText: ''});
        console.log(post);
    }

    return (
        <form>
            <MyInput
                value={post.title}
                type={'text'}
                onChange = {e => setPost({...post, title: e.target.value})}
                placeholder={'post title'}
            />
            <MyInput
                value={post.postText}
                type={'text'}
                onChange = {e => setPost({...post, postText: e.target.value})}
                placeholder={'post text'}
            />
            <MyButton onClick = {addPost}>add post</MyButton>
        </form>
    );
};

export default PostForm;