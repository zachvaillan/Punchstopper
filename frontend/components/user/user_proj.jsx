import React from 'react';
import { Link } from 'react-router-dom';

class UserProj extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            Object.values(this.props.projects).map( project => {
                let projectTitle = project.title ? project.title : "Edit to add title!";
                console.log(project)
                console.log(project.photo)
                let projectImage = (
                    <div className="project-image-container">
                        <img src={project.photoUrl} className="project-image"></img>
                    </div>
                );

                let buttons = (
                    <div className="edit-button-cont">
                        <Link to={`/projects/${project.id}/edit`} className="edit-button">EDIT</Link>
                    </div>
                )

                {if(this.props.backed){
                    buttons = null;
                }}
            

                return (
                    <li key={project.id} className="user-project">
                    {projectImage}
                    <div className="space-between">
                        <div className="user-proj-info-cont">
                            <div>{projectTitle}</div>
                            <div>{project.description}</div>
                        </div>
                        {buttons}
                    </div>
                </li>
                );
            })
        )
    }
}

export default UserProj;