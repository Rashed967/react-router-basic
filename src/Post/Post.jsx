import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {body, id, title, userId} = post;
    return (
        <div>
            <h3>{title}</h3>
            <p>{userId}</p>
            <button><Link to={`/postDetail/${id}`}>Read more</Link></button>
        </div>
    );
};

export default Post;