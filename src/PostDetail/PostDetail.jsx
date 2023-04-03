import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    const {body, id, title, userId} = post
    const navigate = useNavigate()
    const goBackHandler = () =>{
        navigate(- 1)
    }
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>User Id : {userId}</p>
            <button onClick={goBackHandler}>Go Back</button>
        </div>
    );
};

export default PostDetail;