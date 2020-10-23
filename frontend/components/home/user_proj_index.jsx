import React from 'react';
import { Link } from 'react-router-dom';
import UserProj from './user_proj';

class UserProjects extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProjects();
    }

    render(){
        return(
            <ul>
                <UserProj currentUser={this.props.currentUser} projects={this.props.projects}/> 
            </ul>
        )
    }
}

export default UserProjects;