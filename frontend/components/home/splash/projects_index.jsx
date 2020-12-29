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
                <div className="footer-cont">
                    <div className="footer">
                        <div className="foot-col">
                            <div className="image-of-me-cont">
                                <img className="image-of-me" src="https://punchstopper-seeds.s3-us-west-1.amazonaws.com/B120B6B0-53C6-40DC-8386-CFA8BE6A6675.JPEG" />
                            </div>
                            <p>I have a passion for creation and growth.
                            As a full stack developer, I'm able to take advantage of tools such as
                            JavaScript, React / Redux, Ruby on Rails, PostgreSQL and more to turn
                            ideas into reality. By constantly assessing and looking for ways
                        my work could be improved, innovation naturally follows.</p>
                        </div>
                        <div className="foot-col">
                            My interest in programming and technology
                            came to fruition as I realized how much I loved working with start ups.
                            This was the perfect playing field for me - offering a chance for me to be creative,
                            continually revise and improve, and watch my work directly effect growth.
                            As soon as I got involved with the Chronic Pain Science group, I realized
                            the fast-pace and versatility in work that start ups offered was unmatched
                            anywhere else. To be able to offer more, and help build the product
                            and not just the business, I decided I had to learn to code.
                    </div>
                        <div className="foot-col">
                            My mentality of reiteration and constant
                            improvement doesn't end with my professional life. It is something
                            I embody every day. I spend my free time bodybuilding, with aspirations
                            of getting pro card within two years. This sport is a lifestyle - not
                            only does every single thing I eat matter, but my sleep and the quality of it,
                            will determine whether tomorrow is spent getting better or remaining stagnant.
                            In my freeER time, I satisfy my curiosity by reading, or my hunger for adventure by backpacking.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;