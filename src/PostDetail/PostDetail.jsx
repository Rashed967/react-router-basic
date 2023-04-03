import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    const {body, id, title, userId} = post
    console.log(post)
    return (
        <div>
            <h3>single post</h3>
        </div>
    );
};

export default PostDetail;