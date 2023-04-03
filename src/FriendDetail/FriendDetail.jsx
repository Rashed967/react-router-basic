import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData()
    const {name, id, phone, email, username, website} = friend;
    console.log(friend)
    return (
        <div>
            <h2>Name : {name}</h2>
            <p>Phone : {phone}</p>
            <p>Email : {email}</p>
            <p>UserName : {username}</p>
            <p>Website : {username}</p>
        </div>
    );
};

export default FriendDetail;<h2>Friend Detail here</h2>