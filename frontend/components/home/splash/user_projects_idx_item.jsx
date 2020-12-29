import React from 'react';
import { Link } from 'react-router-dom';

const UserProjectsIndexItem = props => {
    return (
        <div className="user-proj">
            <Link to={`/projects/${props.project.id}`}><img className="userproj-img" src={props.project.photoUrl}></img></Link>
            <div className="rec-proj-info">
                <Link to={`/projects/${props.project.id}`}><p className="useridx-proj-title">{props.project.title}</p></Link>
                <Link to={`/projects/${props.project.id}`}><p className="useridx-proj-desc">{props.project.description}</p></Link>
                <div className="owner-container">
                    <p>By&nbsp;</p><p className='featured-owner'>{props.project.owner}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProjectsIndexItem