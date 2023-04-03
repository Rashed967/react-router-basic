import React from 'react';
import { Link } from 'react-router-dom';
import  ActiveLink  from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Friends">Friends</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/post">Post</Link>
        </nav>
    );
};

export default Header;
