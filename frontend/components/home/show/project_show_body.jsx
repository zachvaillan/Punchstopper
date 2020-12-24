import React from 'react';

class ProjectShowBody extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {console.log(this.props.project.rewards)}
                <div className="proj-body-nav">
                    <div className="proj-body-nav-tabs">
                        <a href="#">Campaign</a>
                        <a href="#">FAQ</a>
                        <a href="#">Updates</a>
                        <a href="#">Comments</a>
                        <a href="#">Community</a>
                    </div>

                    {/* <div className="proj-body-nav-actions">
                        <button>Back this project</button>
                        <button>Remind me</button>
                    </div> */}
                </div>

                <div className="proj-body-body">
                    <div className="about-nav"></div>
                    <p className="story"></p>
                </div>

            </div>
        )
    }
}

export default ProjectShowBody