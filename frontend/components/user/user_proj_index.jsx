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
        if (!this.props.user) return null;

        return(
            <ul>
                {console.log(this.props.userPage.projects)}
                {/* <UserProj currentUser={this.props.currentUser} projects={this.props.projects}/>  */}
            </ul>
        )
    }
}

export default UserProjects;