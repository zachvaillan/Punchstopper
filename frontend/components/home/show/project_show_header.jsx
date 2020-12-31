import React from 'react';

class ProjectShowHeader extends React.Component{
    constructor(props){
        super(props);
        this.handleClickScroll = this.handleClickScroll.bind(this);
    }

    handleClickScroll(e) {
        e.preventDefault();
        let element = document.getElementById('no-reward-cont')
        element.scrollIntoView({
            behavior: "smooth"
        });
    }

    render(){

        let width;
        if ((this.props.project.funding_amount / this.props.project.funding_goal) * 100 > 100) {
            width = 100;
        } else {
            width = (this.props.project.funding_amount / this.props.project.funding_goal) * 100;
        }

        return(
            <div className="proj-show-head-cont">
                <div className="proj-show-head-fullwidth">
                    <div className="proj-show-head-wrapper">
                        <div className="proj-show-head-top">
                            <h1 className="proj-show-head-title">{this.props.project.title}</h1>
                            <p className="proj-show-head-desc">{this.props.project.description}</p>
                        </div>
                        
                        <div className="proj-show-head-left">
                                <img className="project-show-img" src={this.props.project.photoUrl}/>
                                
                            <div className="proj-show-head-badges">

                            </div>
                        </div>
                        <div className="proj-show-head-right">
                            <div className="proj-show-head-list">
                                <div className="funding-bar-bg">
                                    <div className="funding-bar" style={{ width: `${width}%` }}></div>
                                </div>
                                <div>
                                    <p className="proj-fund-amnt">${this.props.project.funding_amount}</p>
                                    <p className="proj-head-p">pledged of {this.props.project.funding_goal} goal</p>
                                </div>

                                <div>
                                    <p className="proj-head-h">{this.props.project.backers ? this.props.project.backers.length : null}</p>
                                    <p className="proj-head-p">backers</p>
                                </div>

                                <div>
                                    {/* <p className="proj-head-h">{ this.pro -  : "Unlimited"}</p> */}
                                    {/* <p className="proj-head-p">days to go</p> */}
                                </div>
                                
                                <button onClick={this.handleClickScroll} className="proj-head-back-btn">Back this project</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="proj-body-nav">
                        <div className="proj-body-nav-tabs">
                            <a>Campaign</a>
                            {/* <a href="#">FAQ</a>
                            <a href="#">Updates</a>
                            <a href="#">Comments</a>
                            <a href="#">Community</a> */}
                        </div>

                        {/* <div className="proj-body-nav-actions">
                            <button>Back this project</button>
                            <button>Remind me</button>
                        </div> */}
                </div>
            </div>
        )
    }
}

export default ProjectShowHeader;