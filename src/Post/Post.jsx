import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {body, id, title, userId} = post;
    const navigate = useNavigate()
    const navigateToNext = () =>{
        navigate(`/postDetail/${id}`)
    }
    return (
        <div>
            <h3>{title}</h3>
            <p>{userId}</p>
            <Link to={`/postDetail/${id}`}><button>Read more</button></Link>
            <button onClick={navigateToNext}>See more</button>
        </div>
    );
};

export default Post;