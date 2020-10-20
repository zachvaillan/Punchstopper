import React from 'react';

const RecommendedProjectsIndexItem = props => {
    return(
        <li className="rec-proj-cont">
            <div className="rec-proj">
                <img className="recommended-img" src={props.project.image_url}></img>
                <div className="rec-proj-info">
                    <p className="rec-proj-title">{props.project.title}</p>
                    <p className="rec-proj-perc">{(props.project.funding_amount / props.project.funding_goal) * 100}%</p>
                    <p>By {props.project.owner}</p>
                </div>
            </div>
        </li> 
    )
}

export default RecommendedProjectsIndexItem