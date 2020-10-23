import React from 'react';
import { Link } from 'react-router-dom';

class UserProj extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <li>
                {this.props.projects.map( project => {
                    if (project.owner_id === this.props.currentUser.id){
                        return <Link to={`/projects/${this.props.project.id}`}>{this.props.project.title}</Link>         
                    } 
                })}
            </li>
        )
    }
}

export default UserProj;