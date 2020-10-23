import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/session';

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
            <div className="user-nav">
                <div className="prof-img-cont">
                    <img className="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Color_icon_green.svg/1200px-Color_icon_green.svg.png"/>
                    <Link to={`/${this.props.currentUser.id}/projects`}>My projects</Link>
                    <button className="logout-btn" onClick={() => this.props.logoutUser()}>Logout</button>
                </div>
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
                <Link to="/"><h1 className="proj-name">PunchStopper</h1></Link>
            </div>

            <div className="right-menu">
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
                        <Link to="/"><h1 className="proj-name">PunchStopper</h1></Link>
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