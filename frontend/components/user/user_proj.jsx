import React from 'react';
import { Link } from 'react-router-dom';

class UserProj extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            Object.values(this.props.userPage.projects).map( project => {
                let projectTitle = project.title ? project.title : "Edit to add title!";
                let projectImage = project.image_url ? (
                    <div className="project-image-container"><img src={project.image_url} className="project-image"></img></div>
                ) : (
                    <div className="project-image-placeholder">
                        <div className="proj-img-instruct">Edit to add image</div>
                    </div>
                );

                return <li key={project.id} className="user-project">
                    {projectImage}
                    <div className="user-proj-info-cont">
                        <div>{projectTitle}</div>
                        <div>{project.description}</div>
                    </div>
                    <Link to={`/projects/${project.id}/edit`} className="edit-button">EDIT</Link>
                </li>
            })
        )
    }
}

export default UserProj;