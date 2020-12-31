import React from 'react';
import UserProjectsIndexItem from './user_projects_idx_item';

class UserProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    render() {

        let projectsArray = this.props.projects;
        let showcase = (
            <div className="user-projects-list">
                {projectsArray.slice(projectsArray.length - 20).map(project => {
                    if(project.launched){
                        return (<UserProjectsIndexItem project={project} key={project.id} />)
                    }
                })}
            </div>)

        return (
            <div className="fresh-favs-wrapper">
                <p className="fresh-favs-p">FRESH FAVORITES</p>
                {showcase}
            </div>
        )
    }
}

export default UserProjects;