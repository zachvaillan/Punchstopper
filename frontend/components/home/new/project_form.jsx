import React from 'react';

class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            category: "",
            location: "",
            description: "",
            page: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    };

    handleUpdate(field){
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleNext(e){
        e.preventDefault();
        this.setState( (prevState) => ({page: prevState.page + 1}) )
    }

    handlePrev(e){
        e.preventDefault();
        this.setState( (prevState) => ({page: prevState.page - 1}) )
    }

    handleSubmit(e){
        e.preventDefault();
        let project = Object.assign({}, this.state);
        delete project.page;
        this.props.createProject(project)
            .then( () => this.props.history.push(`/${this.props.currentUser.id}/projects`));
    }

    render(){

        const categoryForm = (
            <div className="proj-cre-form">
                <h2 className="proj-form-heading">First, let’s get you set up.</h2>
                <p className="proj-form-subheading">Pick a project category to connect with a specific community. You can always update this later.</p>
                <select onChange={this.handleUpdate("category")} className="proj-form-select" placeholder="Select your category">
                    <option value="art">Art</option>
                    <option value="comics">Comics & Illustration</option>
                    <option value="tech">Design & Tech</option>
                    <option value="film">Film</option>
                    <option value="craft">Food & Craft</option>
                    <option value="games">Games</option>
                    <option value="music">Music</option>
                    <option value="publishing">Publishing</option>
                </select>
                <div className="proj-form-btn-cont">
                    <button className="proj-form-btn" onClick={this.handleNext}>Next: Project idea</button>
                </div>
            </div>
            
        );

        const descForm = (
            <div className="proj-cre-form">
                <h2 className="proj-form-heading">Describe what you'll be creating.</h2>
                <p className="proj-form-subheading">And don't worry, you can edit this later too.</p>
                <textarea onChange={this.handleUpdate("description")} className="desc-form-input" placeholder="A short claymation about boba"/>
                <div className="proj-form-btn-cont-desc">
                    <button className="proj-form-go-back" onClick={this.handlePrev}>Category</button>
                    <button className="proj-form-btn" onClick={this.handleNext}>Next: Location</button>
                </div>
            </div>
        );

        const countryForm = (
            <div className="proj-cre-form">
                <h2 className="proj-form-heading">Finally, let’s confirm your eligibility.</h2>
                <p className="proj-form-subheading">And don't worry, you can edit this later too.</p>
                <select onChange={this.handleUpdate("location")} className="proj-form-select">
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
                <div className="proj-form-btn-cont-desc">
                    <button className="proj-form-go-back" onClick={this.handlePrev}>Category</button>
                    <button className="proj-form-btn" onClick={this.handleSubmit}>Continue</button>
                </div>
            </div>
        );

        let formDisplay = categoryForm;

        if (this.state.page === 2){
            formDisplay = descForm;
        } else if (this.state.page === 3){
            formDisplay = countryForm; 
        }

        return(
            <div>
                <p className="proj-form-pgnum">{this.state.page} of 3</p>
                <div className="project-form-container">
                    <form onSubmit={this.handleSubmit}>
                        {formDisplay}
                    </form>
                </div>
            </div>
        )
    }
}

export default ProjectForm;