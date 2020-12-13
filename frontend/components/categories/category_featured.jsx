import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProject = props => {

    let featured = props.projects[0] ?
        (
            <div>
                <Link to={`/projects/${props.projects[0].id}`}><img className="featured-proj-img" src={props.projects[0].image_url} />
                    <p className="featured-proj-title">{props.projects[0].title}</p>
                    <p className="featured-proj-desc">{props.projects[0].description}</p>
                </Link>
                <p>{props.projects[0].owner}</p>
            </div>
        ) :
        (<p></p>);

    return (
        <div>
            {featured}
        </div>
    )
}

export default FeaturedProject;