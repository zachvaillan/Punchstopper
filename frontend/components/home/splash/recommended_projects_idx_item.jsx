import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedProjectsIndexItem = props => {
    return(
        <li className="rec-proj-cont">
            <div className="rec-proj">
                <Link to={`/projects/${props.project.id}`}><img className="recommended-img" src={props.project.photoUrl}></img></Link>
                <div className="rec-proj-info">
                    <Link to={`/projects/${props.project.id}`}><p className="rec-proj-title">{props.project.title}</p></Link>
                    <p className="rec-proj-perc">{(props.project.funding_amount / props.project.funding_goal) * 100}%</p>
                    <div className="owner-container">
                        <p>By&nbsp;</p><p className='featured-owner'>{props.project.owner}</p>
                    </div>
                </div>
            </div>
        </li> 
    )
}

export default RecommendedProjectsIndexItem