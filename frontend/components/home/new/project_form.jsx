import React from 'react';

class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            end_date: "",
            funding_goal: "",
            image_url: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    onSubmit(field){
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createProject(this.state)
            .then(() => this.props.history.push('/'));
    }

    render(){
        return(
            <div className="project-form-container">
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type="text" value={this.state.title} onChange={this.onSubmit("title")} />
                    
                    <label>Description</label>
                    <textarea value={this.state.description} onChange={this.onSubmit("description")} />
                    
                    <label>End Date</label>
                    <input type="date" value={this.state.end_date} onChange={this.onSubmit("end_date")} />
                    
                    <label>Funding Goal</label>
                    <input type="number" value={this.state.funding_goal} onChange={this.onSubmit("funding_goal")} />
                    
                    <label>Image</label>
                    <input type="text" value={this.state.image_url} onChange={this.onSubmit("image_url")} />

                    <button type="submit">Create Project</button>
                </form>
            </div>
        )
    }
}

export default ProjectForm;