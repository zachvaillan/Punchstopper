import React from 'react';
import { Link } from 'react-router-dom';
import UserProj from './user_proj';

class UserProjects extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user);
    }

    render(){
        if (!this.props.userPage) return null;

        let projects = !this.props.userPage.projects ? (
            null
        ) : (
            <UserProj userPage={this.props.userPage} />
        )

        return(
            <ul className="user-project-list">
                {projects}
            </ul>   
        )
    }
}

export default UserProjects;