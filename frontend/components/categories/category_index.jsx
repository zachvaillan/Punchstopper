import React from 'react';
import RecommendedProjectsIndex from '../home/splash/recommended_projects_idx';
import FeaturedProject from '../home/splash/featured_proj';
import { Link } from 'react-router-dom';


class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null
        };
    }

    componentDidMount() {
        this.props.fetchProjectsByCategory(this.props.category.slice(0, 1).toUpperCase()
        + this.props.category.slice(1));
    }

    render() {
        if (!this.props.projects) return null;

        return (
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
                </div>
            </div>
        )
    }
}

export default CategoryIndex;