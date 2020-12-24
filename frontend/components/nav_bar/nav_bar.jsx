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
            <div className="right-menu">
                <div className="prof-img-cont">
                    {console.log(this.props.currentUser.photoUrl)}
                    <img className="profile-img" src={this.props.currentUser.photoUrl}/>
                </div>
                <div className="nav-items-wrapper">
                    <Link to={`/${this.props.currentUser.id}`}>My projects</Link>
                    <button className="logout-btn" onClick={() => this.props.logoutUser()}>Logout</button>
                </div>
            </div>
        ) : (
            <div className="right-menu">
                {loginCorner}
            </div>
        );

        const newProjectLink = this.props.currentUser ? (
            <Link to="/projects/new">Start a project</Link>
        ) : (
            <Link to="/signup">Start a project</Link>
        );

        let display = 
        (<div className="global-nav">
            <div className="left-menu">
                <div className="nav-items-wrapper">
                    <a href="#">Explore</a>
                    {newProjectLink}
                </div>
            </div>

            <div className="global-logo">
                <Link to="/"><h1 className="proj-name">PunchStopper</h1></Link>
            </div>

            {topRightNav}

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