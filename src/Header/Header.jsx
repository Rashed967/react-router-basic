import React from 'react';
import { Link } from 'react-router-dom';
import  ActiveLink  from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <ActiveLink to="/Friends">Friends</ActiveLink>
            <Link to="/Contact">Contact</Link>
            <Link to="/post">Post</Link>
        </nav>
    );
};

export default Header;
