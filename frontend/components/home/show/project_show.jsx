import React from 'react';
import ProjectShowHeader from './project_show_header';
import ProjectShowBody from './project_show_body';

class ProjectShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.addBack = this.addBack.bind(this);
    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
            .then( project => this.setState({project}));
    }

    addBack(projectId, newProject, back){
        this.props.createBack(back);
        this.props.addBackingAmount(projectId, newProject)
            .then( project => console.log(project));
    }

    render(){
        if (!this.props.project) return null;
        
        return(
            <div>
                <ProjectShowHeader project={this.props.project}/>
                <ProjectShowBody project={this.props.project} 
                    addBack={this.addBack} currentUser={this.props.currentUser}
                />
            </div>
        )
    }
}

export default ProjectShow;