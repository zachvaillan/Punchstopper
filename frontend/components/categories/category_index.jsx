import React from 'react';


class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProjects();

    }

    filterByCategory(projects){
        let filteredProjects = [];
        projects.forEach( project => {
            if(project.category === this.props.category){
                filteredProjects.push(project);
            }
        })
        console.log(filteredProjects);
    }

    render() {

        return (
            <div>
                {/* <div className="project-cats-container">
                    <ul className="project-cats">
                        <li>Arts</li>
                        <li>Comics and Illustration</li>
                        <li>Design & Tech</li>
                        <li>Film</li>
                        <li>Food & Craft</li>
                        <li>Games</li>
                        <li>Music</li>
                        <li>Publishing</li>
                    </ul>
                </div>
                <div className="projects">
                    <div className="featured">
                        <div className="featured-inner">
                            <h4>FEATURED PROJECT</h4>
                            <FeaturedProject projects={this.props.projects} />
                        </div>
                    </div>
                    <ul className="recommended">
                        <h4>RECOMMENDED FOR YOU</h4>
                        <RecommendedProjectsIndex projects={this.props.projects} />
                    </ul>
                </div>
                <div className="subscribe-wrapper">
                    <div className="subscribe-container">
                        <h2>Discover the best and brightest projects on Kickstarter</h2>
                        <h4>Sign up to receive our weekly Projects We Love newsletter.</h4>
                        <form>
                            <input className="email-subscribe-input" type="text" placeholder="Enter email address" />
                            <button type="submit" className="subscribe-btn">Subscribe</button>
                        </form>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default CategoryIndex;