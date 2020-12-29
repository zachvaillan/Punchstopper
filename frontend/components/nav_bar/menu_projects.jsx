import React from 'react';
import { Link } from 'react-router-dom';

class MenuProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: null
        }; 
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser.id)
            .then(user => this.setState({projects: user.projects}));
    }

    render() {

        if (!this.state.projects) return null;

        return (

            <div className="menu-projects-list">
                {this.state.projects.slice(0, 3).map((project) => {
                    return (
                        <Link to={`/projects/${project.id}/edit`} key={project.id} className="menu-project-item">
                            <img className="menu-proj-img" src={project.photoUrl}/>
                            <p className="menu-proj-cat">{project.category} project</p>
                        </Link>
                    )
                })}
            </div>
        )
    }
}

export default MenuProjects;