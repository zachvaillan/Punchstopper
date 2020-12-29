import React from 'react';
import { Link } from 'react-router-dom';
import UserProj from './user_proj';

class UserProjects extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user)
            .then(user => this.setState({user: user}))
    }

    render(){
        if (!this.state.user) return null;

        let projects = !this.state.user.projects ? (
            null
        ) : (
            <UserProj userPage={this.state.user} />
        )

        return(
            <div className="user-show-bg">
                <div className="row-width">
                    <div className="current-user-nav">
                        <p>Activity</p>
                        <p>Backed projects</p>
                        <p>Created projects</p>
                        <p>Settings</p>
                        <p>Profile</p>
                    </div>
                    <p className="created-projects">Created projects</p>
                    <p className="created-projects-subhead">A place to keep track of all your created projects</p>
                    <p className="started">Started</p>
                    <ul className="user-project-list">
                        {projects}
                    </ul>   
                </div>
            </div>
        )
    }
}

export default UserProjects;