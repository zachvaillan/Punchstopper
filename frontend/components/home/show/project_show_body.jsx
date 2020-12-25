import React from 'react';
import RewardsIndex from '../../rewards/rewards_index';

class ProjectShowBody extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if (!this.props.project.rewards) return null;

        return(
            <div className="proj-body-container">

                <div className="about-nav">Hello</div>

                <p className="story">Hello</p>

                <div className="rewards-index-sidebar">
                    <RewardsIndex rewards={this.props.project.rewards} />
                </div>
            </div>
        )
    }
}

export default ProjectShowBody