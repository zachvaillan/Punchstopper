import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/session';
import MenuProjects from './menu_projects';
import UserProjIndex from '../user/user_proj_index';

class NavBar extends React.Component { 
    
    constructor(props){
        super(props);
        this.state = {
            menu: "closed"
        };
        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(){
        if(this.state.menu === "closed"){
            this.setState({ menu: "open" });
        } else {
            this.setState({ menu: "closed" });
        }
    }

    render(){

        const loginCorner = (this.props.location.pathname === "/login") ? (
            <div></div>
        ) : 
        (<Link to="/login">Login</Link>);

        const dropDownMenu = (this.state.menu === "open") ? (
            <div className="menu">
                <div className="upper-menu-cont">
                    <div className="upper-menu-nav">
                        <p className="menu-col-heading">YOUR ACCOUNT</p>
                        <p className="menu-nav-link">Recommended for you</p>
                        <p className="menu-nav-link">Profile</p>
                        <p className="menu-nav-link">Settings</p>
                        <p className="menu-nav-link">Activity</p>
                    </div>
                    <div className="upper-menu-account">
                        <p className="menu-col-heading">CREATED PROJECTS</p>
                        <MenuProjects currentUser={this.props.currentUser} fetchUser={this.props.fetchUser}/>
                        <Link to={`/${this.props.currentUser.id}`} className="menu-new-cont">
                            <div className="menu-new-icon">+</div>
                            <p className="new-project-from-dropdown">New</p>
                        </Link> 
                        <div className='view-all-cont'><Link className="view-all" to={`/${this.props.currentUser.id}`}>View all</Link></div>
                    </div>
                </div>
                <div className="logout-btn-cont">
                    <button className="logout-btn" onClick={() => this.props.logoutUser()}>Log out</button>
                </div>   
            </div>
        ) : (
            null
        );

        const topRightNav = this.props.currentUser ? (
            <div className="right-menu">
                <div className="prof-img-cont">
                    <img className="profile-img" src={this.props.currentUser.photoUrl} onFocus={() => this.showMenu()} onBlur={() => this.showMenu()} tabIndex="1" />
                    <div className="menu-container">
                        {dropDownMenu}
                    </div>
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