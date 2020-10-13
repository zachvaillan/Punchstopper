import React from 'react';

export default () => (    
    <div className="global-nav">
        
        <div className="global-logo">
            <div className="specific-logo-container">
                <img className="logo" src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&s=0cce952d7b55823ff451a58887a0c578"/>
            </div>
        </div>

        <div className="left-menu">
            <a href="#">Explore</a>
            <a href="#">Start a project</a>
        </div>

        <div className="right-menu">
            <a href="#">Search</a>
            <a href="#">Login</a>
        </div>
    </div>
);
