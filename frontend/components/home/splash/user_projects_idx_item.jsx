import React from 'react';
import { Link } from 'react-router-dom';

const UserProjectsIndexItem = props => {

    let width;
    if ((props.project.funding_amount / props.project.funding_goal) * 100 > 100) {
        width = 100;
    } else {
        width = (props.project.funding_amount / props.project.funding_goal) * 100;
    }

    return (
        <div className="user-proj">
            <Link to={`/projects/${props.project.id}`}><img className="userproj-img" src={props.project.photoUrl}></img>
                <div className="funding-bar-bg">
                    <div className="funding-bar" style={{ width: `${width}%` }}></div>
                </div>
            </Link>
            <div className="rec-proj-info">
                <Link to={`/projects/${props.project.id}`}><p className="useridx-proj-title">{props.project.title ? props.project.title : "NO TITLE"}</p></Link>
                <Link to={`/projects/${props.project.id}`}><p className="useridx-proj-desc">{props.project.description}</p></Link>
                <div className="owner-container">
                    <p>By&nbsp;</p><p className='featured-owner'>{props.project.owner}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProjectsIndexItem