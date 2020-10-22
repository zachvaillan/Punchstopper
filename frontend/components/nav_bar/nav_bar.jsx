import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component { 
    
    constructor(props){
        super(props);
    }
    
    render(){

        const loginCorner = (this.props.location.pathname === "/login") ? (
            <div></div>
        ) : 
        (<Link to="/login">Login</Link>);

        const topRightNav = this.props.currentUser ? (
            <div className="logged-in-container">
                <a href="#">Hello, {this.props.currentUser.name} </a>
                <button onClick={this.props.logoutUser}>Logout</button>
            </div>
        ) : (
            <div className="login-nav">
                {loginCorner}
            </div>
        );

        let display = 
        (<div className="global-nav">
            <div className="left-menu">
                <a href="#">Explore</a>
                <Link to="/projects/new">Start a project</Link>
            </div>

            <div className="global-logo">
                <Link to="/"><img className="logo" src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&s=0cce952d7b55823ff451a58887a0c578"/></Link>
            </div>

            <div className="right-menu">
                <a href="#">Search</a>
                {topRightNav}
            </div>
        </div>);

        if (this.props.location.pathname === "/projects/new"){
            display = (
            <div className="project-nav">
                <div className="global-nav-proj-form">
                    <div className="left-menu">
                    </div>
                    <div className="global-logo">
                        <Link to="/"><img className="logo" src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&s=0cce952d7b55823ff451a58887a0c578"/></Link>
                    </div>
                    <div className="right-menu">
                    </div>
                </div>
            </div>);
        };

        return(
            <div>
                {display}
            </div>
        );
    }
};

export default NavBar