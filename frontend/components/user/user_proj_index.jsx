import React from 'react';
import { Link } from 'react-router-dom';
import UserProj from './user_proj';

class UserProjects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: "created-projects"
        };
        this.handlePageSwitch = this.handlePageSwitch.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user)
            .then(user => this.setState({user: user}))
    }

    handlePageSwitch(){
        return e => {
            this.setState({page: e.target.className})
        }
    }

    render(){
        if (!this.state.user) return null;

        let projects = !this.state.user.projects ? (
            null
        ) : (
            <UserProj projects={this.state.user.projects} />
        )
        
        let highlight = (
            <div className="current-user-nav">
                {/* <p>Activity</p> */}
                <p className="backed-projs" onClick={this.handlePageSwitch()}>Backed projects</p>
                <p className="created-projs" style={{ textDecoration: "underline" }}>Created projects</p>
                {/* <p>Settings</p>
                            <p>Profile</p> */}
            </div>
        )

        let heading = (
            <div>
                <p className="created-projects">Created projects</p>
                <p className="created-projects-subhead">A place to keep track of all your created projects</p>
            </div>
        );

        if (this.state.page === "backed-projs"){
            highlight = (
                <div className="current-user-nav">
                    {/* <p>Activity</p> */}
                    {console.log(this.state.user)}
                    <p className="backed-projs" style={{textDecoration: "underline"}}>Backed projects</p>
                    <p className="created-projs" onClick={this.handlePageSwitch()}>Created projects</p>
                    {/* <p>Settings</p>
                            <p>Profile</p> */}
                </div>
            );
            projects = <UserProj projects={this.state.user.backed_projects} backed={true}/>
            heading = (
                <div>
                    <p className="created-projects">Backed projects</p>
                    <p className="created-projects-subhead">A place to keep track of all your backed projects</p>
                    <p className="started">Started</p>
                </div>
            )
        };

        return(

            <div className="user-show-bg">
                <div className="row-width">
                    {highlight}
                    {heading}
                    <ul className="user-project-list">
                        {projects}
                    </ul>   
                </div>
            </div>
        )
    }
}

export default UserProjects;