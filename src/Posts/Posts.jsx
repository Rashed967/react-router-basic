import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData()
    const navigate = useNavigate()

    return (
        <div>
            <h3>Post page</h3>
            <div>
                {
                    posts.map(post => <Post 
                    key={post.id}
                    post={post}
                    ></Post>)
                }
                <button >Go back</button>
            </div>
        </div>
    );
};

export default Posts;