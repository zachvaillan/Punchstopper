import React from 'react';
import RecommendedProjectsIndexItem from './recommended_projects_idx_item';

class RecommendedProjectsIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1
        }
    }

    render(){

        let projectsArray = this.props.projects;
        let showcase = (
            <div>
                {projectsArray.slice(0, 3).map( project => { 
                    return (<RecommendedProjectsIndexItem project={project} key={project.id} />) 
                })}
            </div>)

        if (this.state.page === 2){
            showcase = (
            <div>
                {projectsArray.slice(2, 7).map( project => { 
                    return (<RecommendedProjectsIndexItem project={project} key={project.id} />) 
                })}
            </div>)
        }

        return(
            <div>
                {showcase}
                <div className="rec-idx-nav-cont">
                    <div className="rec-idx-nav">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecommendedProjectsIndex;