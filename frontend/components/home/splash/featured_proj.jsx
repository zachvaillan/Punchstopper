import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProject = props => {

    let width;
    if(props.projects[0]){
        if ((props.projects[0].funding_amount / props.projects[0].funding_goal) * 100 > 100) {
            width = 100;
        } else {
            width = (props.projects[0].funding_amount / props.projects[0].funding_goal) * 100;
        }
    }
    
    let featured = props.projects[0] ? 
    (
        <div>
                {console.log((props.projects[0].funding_amount / props.projects[0].funding_goal) * 100)}
            <Link to={`/projects/${props.projects[0].id}`}>
                <img className="featured-proj-img" src={props.projects[0].photoUrl} />
                <div className="funding-bar-bg">
                        <div className="funding-bar" style={{ width: `${width}%`}}></div>
                </div>
                <p className="featured-proj-title">{props.projects[0].title}</p>
                <p className="featured-proj-desc">{props.projects[0].description}</p>
                <div className="owner-container">
                    <p>By&nbsp;</p><p className='featured-owner'>{props.projects[0].owner}</p>
                </div>
            </Link>
        </div>
    ) :
    (<p></p>);

    return(
        <div>
            {featured}
        </div>
    )
}

export default FeaturedProject;