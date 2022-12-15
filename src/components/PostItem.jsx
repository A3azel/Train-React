import React from 'react';
import MyButton from "../UI/button/MyButton";

const PostItem = (props) => {

    return (
        <div>
            <div className={"post"}>
                <div>
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>
                        <p>{props.post.postText}</p>
                    </div>
                </div>
                <div>
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>

            </div>
        </div>
    );
};

export default PostItem;