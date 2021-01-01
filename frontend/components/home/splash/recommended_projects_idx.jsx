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

    nextPage(){
        return e => {
            if (this.state.page < 3) {
                this.setState({ page: this.state.page += 1 })
            }
        }
    }

    prevPage(){
        return e => {
            if (this.state.page > 1) {
                this.setState({ page: this.state.page -= 1 })
            }
        }
    }

    render(){

        let projectsArray = this.props.projects;
        let showcase = (
            <div className="recommended-inner">
                {projectsArray.slice(1, 4).map( project => { 
                    return (<RecommendedProjectsIndexItem project={project} key={project.id} />) 
                })}
            </div>)

        if (this.state.page === 2){
            showcase = (
            <div className="recommended-inner">
                {projectsArray.slice(4, 7).map( project => { 
                    return (<RecommendedProjectsIndexItem project={project} key={project.id} />) 
                })}
            </div>)
        }

        if (this.state.page === 3){
            showcase = (
            <div className="recommended-inner">
                {projectsArray.slice(7, 10).map( project => { 
                    return (<RecommendedProjectsIndexItem project={project} key={project.id} />) 
                })}
            </div>)
        }
        let underlinedButton = (
            <div className="rec-idx-nav">
                <p onClick={this.prevPage()} style={{color: "gray"}}>{"<"}</p>
                <button onClick={this.onClick(1)} style={{ textDecoration: "underline", color: "#003BFF"}}>1</button>
                <button onClick={this.onClick(2)}>2</button>
                <button onClick={this.onClick(3)}>3</button>
                <p onClick={this.nextPage()}>{">"}</p>
            </div>
        );

        if(this.state.page === 2){
            underlinedButton = (
                <div className="rec-idx-nav">
                    <p onClick={this.prevPage()}>{"<"}</p>
                    <button onClick={this.onClick(1)}>1</button>
                    <button onClick={this.onClick(2)} style={{ textDecoration: "underline", color: "#003BFF" }}>2</button>
                    <button onClick={this.onClick(3)}>3</button>
                    <p onClick={this.nextPage()}>{">"}</p>
                </div>
            );
        }

        if(this.state.page === 3){
            underlinedButton = (
                <div className="rec-idx-nav">
                    <p onClick={this.prevPage()}>{"<"}</p>
                    <button onClick={this.onClick(1)}>1</button>
                    <button onClick={this.onClick(2)}>2</button>
                    <button onClick={this.onClick(3)} style={{ textDecoration: "underline", color: "#003BFF" }}>3</button>
                    <p onClick={this.nextPage()} style={{ color: "gray" }}>{">"}</p>
                </div>
            );
        }

        return(
            <div>
                {showcase}
                <div className="rec-idx-nav-cont">
                    {underlinedButton}
                </div>
            </div>
        )
    }
}

export default RecommendedProjectsIndex;