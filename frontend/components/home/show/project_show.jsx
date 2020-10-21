import React from 'react';
import ProjectShowHeader from './project_show_header';
import ProjectShowBody from './project_show_body';

class ProjectShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
    }

    render(){
        if (!this.props.project) return null;
        
        return(
            <div>
                <ProjectShowHeader project={this.props.project}/>
                <ProjectShowBody project={this.props.project}/>
            </div>
        )
    }
}

export default ProjectShow;