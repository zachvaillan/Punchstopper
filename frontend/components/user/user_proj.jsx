import React from 'react';
import { Link } from 'react-router-dom';

class UserProj extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <ul>
                {Object.values(this.props.userPage.projects).map( project => {
                    return <li>{project.description}</li>
                })}
            </ul>
        )
    }
}

export default UserProj;