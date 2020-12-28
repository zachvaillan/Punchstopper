import React from 'react';
import RecommendedProjectsIndex from './recommended_projects_idx';
import FeaturedProject from './featured_proj';
import UserProjects from './user_projects';
import { Link } from 'react-router-dom';

class Projects extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProjects();
    }

    render(){

        return(
            <div>
                <div className="project-cats-container">
                    <ul className="project-cats">
                        <li><Link className="cat-link" to="/projectsin/arts">Arts</Link></li>
                        <li><Link className="cat-link" to="/projectsin/comics">Comics and Illustration</Link></li>
                        <li><Link className="cat-link" to="/projectsin/design">Design & Tech</Link></li>
                        <li><Link className="cat-link" to="/projectsin/film">Film</Link></li>
                        <li><Link className="cat-link" to="/projectsin/food">Food & Craft</Link></li>
                        <li><Link className="cat-link" to="/projectsin/games">Games</Link></li>
                        <li><Link className="cat-link" to="/projectsin/music">Music</Link></li>
                        <li><Link className="cat-link" to="/projectsin/publishing">Publishing</Link></li>
                    </ul>
                </div>
                <div className="projects">
                    <div className="featured">
                        <div className="featured-inner">
                            <h4>FEATURED PROJECT</h4>
                            <FeaturedProject projects={this.props.projects}/>
                        </div>
                    </div>
                    <ul className="recommended">
                        <h4>RECOMMENDED FOR YOU</h4>
                        <RecommendedProjectsIndex projects={this.props.projects}/>
                    </ul>
                </div>
                <div className="subscribe-wrapper">
                    <div className="subscribe-container">
                        <h2>Discover more projects by Zach Vaillancourt</h2>
                        <h4>Connect with me on LinkedIn and follow me on Github for more projects.</h4>
                        <div className="logos-container">
                            <a className="linkedin-cont" href="https://www.linkedin.com/in/zach-s-vaillancourt-0b0342112/" target="_blank"><img className="linkedin-logo" src="https://punchstopper-seeds.s3-us-west-1.amazonaws.com/LI-Logo.png" /></a>
                            <a href="https://github.com/zachvaillan/Punchstopper" target="_blank"><img className="github-logo" src='https://punchstopper-seeds.s3-us-west-1.amazonaws.com/GitHub_Logo.png' /></a>
                        </div>
                    </div>
                </div>
                <div className="user-projects">
                    <div className="fresh-favorites">
                        <UserProjects projects={this.props.projects} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;