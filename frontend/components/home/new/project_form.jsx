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
            .then( () => this.props.history.push(`/${this.props.currentUser.id}`));
    }

    render(){

        const categoryForm = (
            <div className="proj-cre-form">
                <h2 className="proj-form-heading">First, let’s get you set up.</h2>
                <p className="proj-form-subheading">Pick a project category to connect with a specific community. You can always update this later.</p>
                <select onChange={this.handleUpdate("category")} className="proj-form-select" placeholder="Select your category">
                    <option value="" disabled selected>Select Category</option>
                    <option value="Art">Art</option>
                    <option value="Comics">Comics & Illustration</option>
                    <option value="Tech">Design & Tech</option>
                    <option value="Film">Film</option>
                    <option value="Craft">Food & Craft</option>
                    <option value="Games">Games</option>
                    <option value="Music">Music</option>
                    <option value="Publishing">Publishing</option>
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
                    <option value="" disabled selected>Select Location</option>
                    <option value="Australia">Australia</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Canada">Canada</option>
                    <option value="Denmark">Denmark</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Hong-Kong">Hong Kong</option>
                    <option value="Japan">Japan</option>
                    <option value="United-States">United States</option>
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