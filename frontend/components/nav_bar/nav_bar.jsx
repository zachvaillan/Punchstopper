import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logoutUser}) => {  
    
    const topRightNav = currentUser ? (
        <div className="logged-in-container">
            <a href="#">Hello, {currentUser.name} </a>
            <button onClick={logoutUser}>Logout</button>
        </div>
    ) : (
        <Link to="/login">Login</Link>
    );
    
    return(
        <div className="global-nav">
            <div className="left-menu">
                <a href="#">Explore</a>
                <Link to="/project/new">Start a project</Link>
            </div>

            <div className="global-logo">
                <img className="logo" src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&s=0cce952d7b55823ff451a58887a0c578"/>
            </div>

            <div className="right-menu">
                <a href="#">Search</a>
                {topRightNav}
            </div>
        </div>
    );

};
