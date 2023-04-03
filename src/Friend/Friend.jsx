import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, id, phone, email} = friend;
    return (
        <div>
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{email}</p>
            <button><Link to={`/friend/${id}`}>Get Detail</Link></button>
        </div>
    );
};

export default Friend;