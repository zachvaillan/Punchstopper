import React from 'react';

class ProjectBuild extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.project;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
    }

    handleUpdate(field){
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        let project = Object.assign({}, this.state);
        delete project.page;
        this.props.createProject(project)
            .then(() => this.props.history.push(`/`));
    }

    render(){
        if (!this.props.project) return null;

        return(
            <div className="edit-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="spacer">
                        <h2 className="edit-heading">Image URL</h2>
                        <h4 className="edit-subhead">Choose a picture that represents your project.</h4>
                        <input type="text" placeholder="website.com/picture.png"/>
                    </div>
                    <div className="spacer">
                        <h2 className="edit-heading">Project title</h2>
                        <h4 className="edit-subhead">Write a clear brief title that helps people quickly understand the gist of your project.</h4>
                        <input type="text" placeholder=""/>
                    </div>
                    <div className="spacer">
                        <h2 className="edit-heading">Project category</h2>
                        <h4 className="edit-subhead">Choose the category that most closely aligns with your project.</h4>
                        <select>
                            <option value="art">Art</option>
                            <option value="comics">Comics & Illustration</option>
                            <option value="tech">Design & Tech</option>
                            <option value="film">Film</option>
                            <option value="craft">Food & Craft</option>
                            <option value="games">Games</option>
                            <option value="music">Music</option>
                            <option value="publishing">Publishing</option>
                        </select>
                    </div>
                    <div className="spacer">
                        <h2 className="edit-heading">Project location</h2>
                        <h4 className="edit-subhead">Enter the location that best describes where your country is based.</h4>
                        <select onChange={this.handleUpdate("location")}>
                            <option value="australia">Australia</option>
                            <option value="belgium">Belgium</option>
                            <option value="canada">Canada</option>
                            <option value="denmark">Denmark</option>
                            <option value="france">France</option>
                            <option value="germany">Germany</option>
                            <option value="hongkong">Hong Kong</option>
                            <option value="japan">Japan</option>
                            <option value="unitedstates">United States</option>
                        </select>
                    </div>
                    <div className="spacer">
                        <h2 className="edit-heading">Funding goal</h2>
                        <h4 className="edit-subhead">Set an achievable goal that covers what you need to complete your project.</h4>
                        <input type="text" placeholder="10,000"/>
                    </div>
                    <button className="update-btn" type="submit">Update Info</button>
                </form>
            </div>
        )
    }
}

export default ProjectBuild;