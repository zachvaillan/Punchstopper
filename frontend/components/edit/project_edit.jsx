import React from 'react';

class ProjectBuild extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
            .then( () => this.setState(this.props.project))
    }

    handleUpdate(field){
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.props.project);
        this.props.updateProject(this.props.project.id, this.state)
            .then(() => this.props.history.push(`/`));
    }

    render(){
        if (!this.props.project) return null;

        let locations = ["Australia", "Belgium", "Canada", "Denmark", "France",
            "Germany", "Hong-Kong", "Japan", "United-States"];
        
        let categories = ["Art", "Comics", "Tech", "Film", "Craft", "Games", 
            "Music", "Publishing"];

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
                        <input type="text" placeholder="" onChange={this.handleUpdate("title")}/>
                    </div>

                    <div className="spacer">
                        <h2 className="edit-heading">Project category</h2>
                        <h4 className="edit-subhead">Choose the category that most closely aligns with your project.</h4>
                        <select>
                            <option value={this.props.project.category}>
                                {this.props.project.category}
                            </option>
                            {categories.map( cat => {
                                if (cat != this.props.category){
                                    return <option value={cat}>{cat}</option>
                                }
                            })}
                        </select>
                    </div>

                    <div className="spacer">
                        <h2 className="edit-heading">Project location</h2>
                        <h4 className="edit-subhead">Enter the location that best describes where your country is based.</h4>
                        <select onChange={this.handleUpdate("location")}>
                            <option value={this.props.project.location}>
                                {this.props.project.location}
                            </option>
                            {locations.map( loc => {
                                if(loc != this.props.project.location){
                                    return <option value={loc}>{loc.split("-").join(" ")}</option>
                                }
                            })}
                        </select>
                    </div>

                    <div className="spacer">
                        <h2 className="edit-heading">Funding goal</h2>
                        <h4 className="edit-subhead">Set an achievable goal that covers what you need to complete your project.</h4>
                        <input type="text" placeholder="10,000"/>
                    </div>
                    <button className="update-btn" type="submit" onClick={this.handleSubmit}>Update Info</button>
                </form>
            </div>
        )
    }
}

export default ProjectBuild;