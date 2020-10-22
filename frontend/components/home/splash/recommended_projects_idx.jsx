import React from 'react';
import RecommendedProjectsIndexItem from './recommended_projects_idx_item';

class RecommendedProjectsIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1
        }
    }

    onClick(page_num){
        return e => {
            this.setState({ page: page_num });
        };
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
                {projectsArray.slice(3, 6).map( project => { 
                    return (<RecommendedProjectsIndexItem project={project} key={project.id} />) 
                })}
            </div>)
        }

        if (this.state.page === 3){
            showcase = (
            <div>
                {projectsArray.slice(6, 9).map( project => { 
                    return (<RecommendedProjectsIndexItem project={project} key={project.id} />) 
                })}
            </div>)
        }

        return(
            <div>
                {showcase}
                <div className="rec-idx-nav-cont">
                    <div className="rec-idx-nav">
                        <button onClick={this.onClick(1)}>1</button>
                        <button onClick={this.onClick(2)}>2</button>
                        <button onClick={this.onClick(3)}>3</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecommendedProjectsIndex;