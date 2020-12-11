import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedProjectsIndexItem = props => {
    return(
        <li className="rec-proj-cont">
            <div className="rec-proj">
                <Link to={`/projects/${props.project.id}`}><img className="recommended-img" src={props.project.image_url}></img></Link>
                <div className="rec-proj-info">
                    <Link to={`/projects/${props.project.id}`}><p className="rec-proj-title">{props.project.title}</p></Link>
                    <p className="rec-proj-perc">{(props.project.funding_amount / props.project.funding_goal) * 100}%</p>
                    <p>By {props.project.owner}</p>
                </div>
            </div>
        </li> 
    )
}

export default RecommendedProjectsIndexItem