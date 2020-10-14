import React from 'react';
import ProjectIndexItem from './project_index_item';

class Projects extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul>
                {this.props.projects.map( project => 
                    <ProjectIndexItem project={project} key={project.id} />
                )}
            </ul>
        )
    }
}

export default Projects;