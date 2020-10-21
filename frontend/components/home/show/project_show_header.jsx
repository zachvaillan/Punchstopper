import React from 'react';

class ProjectShowHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="proj-show-head-cont">
                <div className="proj-show-head-top">
                    <h1 className="proj-show-head-title">{this.props.project.title}</h1>
                    <p className="proj-show-head-desc">{this.props.project.description}</p>
                </div>
                
                <div className="proj-show-head-left">
                    <img src={this.props.project.image_url}/>
                    <div className="proj-show-head-badges">

                    </div>
                </div>
                <div className="proj-show-head-right">
                    <div className="proj-show-head-list">
                        <div>
                            <p className="proj-fund-amnt">${this.props.project.funding_amount}</p>
                            <p className="proj-head-p">pledged of $100,000 goal</p>
                        </div>

                        <div>
                            <p className="proj-head-h">5,000</p>
                            <p className="proj-head-p">backers</p>
                        </div>

                        <div>
                            <p className="proj-head-h">50</p>
                            <p className="proj-head-p">days to go</p>
                        </div>
                        
                        <button className="proj-head-back-btn">Back this project</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectShowHeader;