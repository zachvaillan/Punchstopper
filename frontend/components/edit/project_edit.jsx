import React from 'react';
import RewardBuild from './reward_build';
import RewardsIndex from '../rewards/rewards_index';
import { Link } from 'react-router-dom';

class ProjectBuild extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleAddReward = this.handleAddReward.bind(this);
        this.handleLaunch = this.handleLaunch.bind(this);
    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
            .then( () => this.setState(this.props.project));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.rerender === "trigger") {
            this.setState({ rerender: null });
            this.props.fetchProject(this.props.match.params.projectId)
                .then( project => this.setState(project));
        }
    }

    handleUpdate(field){
        return e => {
            console.log(this.state)
            this.setState({ [field]: e.target.value })
        };
    }

    handleFile(){
        return e => {
            this.setState({ photoFile: e.target.files[0] })
        }
    }

    handleAddReward(){
        this.setState({rerender: "trigger"})
            .then(() => console.log(this.state))
    }

    handleLaunch(e){
        e.preventDefault();
        let formData = new FormData();
        formData.append('project[category]', this.state.category);
        formData.append('project[location]', this.state.location);
        formData.append('project[funding_goal]', this.state.funding_goal);
        this.state.photoFile ? formData.append('project[photo]', this.state.photoFile) : null;
        formData.append('project[title]', this.state.title);
        formData.append('project[description]', this.state.description);
        // formData.append('project[owner_id]', 1);
        formData.append('project[launched]', true);
        console.log(formData)
        this.props.updateProject(this.props.match.params.projectId, formData)
            .then(() => this.props.history.push(`/${this.props.currentUser.id}`));
    }

    handleSubmit(e){
        e.preventDefault();
        let formData = new FormData();
        formData.append('project[category]', this.state.category);
        formData.append('project[location]', this.state.location);
        formData.append('project[funding_goal]', this.state.funding_goal);
        this.state.photoFile ? formData.append('project[photo]', this.state.photoFile) : null;
        formData.append('project[story]', this.state.story);
        formData.append('project[title]', this.state.title);
        formData.append('project[description]', this.state.description);
        this.props.updateProject(this.props.match.params.projectId, formData)
            .then(() => this.props.history.push(`/${this.props.currentUser.id}`));
    }

    render(){
        if (!this.props.project) return null;

        let locations = ["Australia", "Belgium", "Canada", "Denmark", "France",
            "Germany", "Hong-Kong", "Japan", "United-States"];
        
        let categories = ["Art", "Comics", "Tech", "Film", "Craft", "Games", 
            "Music", "Publishing"];

        let launched = (
            <div className="spacer">
                <div>
                    <div className="left-col-edit">
                        <h2 className="edit-heading">Launch</h2>
                        <h4 className="edit-subhead">When you're ready, make your project public by launching it!</h4>
                    </div>
                    <div className="right-col-edit">
                        <button className="create-reward" onClick={this.handleLaunch}>Launch</button>
                        <div className="breaker"></div>
                        <Link className="create-reward" to={`/projects/${this.props.project.id}`}>Preview</Link>
                    </div>
                </div>
            </div>
        );

        if (this.props.project.launched){
            launched = (
                <div className="spacer">
                    <div>
                        <p className="edit-heading">Launched!</p>
                    </div>
                </div>
            )
        }

        return(
            <div className="edit-form">
                <form onSubmit={this.handleSubmit}>

                    {launched}

                    <div className="spacer">
                        <div>
                            <div className="left-col-edit">
                                <h2 className="edit-heading">Project title</h2>
                                <h4 className="edit-subhead">Write a clear brief title that helps people quickly understand the gist of your project.</h4>
                            </div>
                            <div className="right-col-edit">
                                <p>Title</p>
                                <input className="edit-input" type="text" placeholder={this.props.project.title || "No title yet!"} onChange={this.handleUpdate("title")} />
                                <p>Subtitle</p>
                                <input className="edit-input" type="text" placeholder={this.props.project.description || "No subtitle yet!"} onChange={this.handleUpdate("description")} />
                            </div>
                        </div>
                    </div>

                    <div className="spacer">
                        <div>
                            <div className="left-col-edit">
                                <h2 className="edit-heading">Project Story</h2>
                                <h4 className="edit-subhead">Tell the your project's story. Why should people back it?</h4>
                            </div>
                            <div className="right-col-edit">
                                <input className="edit-story" type="textarea" placeholder={this.props.project.story || "No story yet!"} onChange={this.handleUpdate("story")} />
                            </div>
                        </div>
                    </div>

                    <div className="spacer">
                        <div>
                            <div className="left-col-edit">
                                <h2 className="edit-heading">Image</h2>
                                <h4 className="edit-subhead">Choose a picture that represents your project.</h4>
                            </div>
                            <div className="right-col-edit">
                                <input className="edit-input" type="file" onChange={this.handleFile()} />
                            </div>
                        </div>
                    </div>

                    <div className="spacer">
                        <div>
                            <div className="left-col-edit">
                                <h2 className="edit-heading">Project category</h2>
                                <h4 className="edit-subhead">Choose the category that most closely aligns with your project.</h4>
                            </div>
                            <div className="right-col-edit">
                                <select className="edit-input" onChange={this.handleUpdate("category")}>
                                    <option value={this.props.project.category}>
                                        {this.props.project.category}
                                    </option>
                                    {categories.map(cat => {
                                        if (cat != this.props.category) {
                                            return <option value={cat}>{cat}</option>
                                        }
                                    })}
                                </select>
                            </div>  
                        </div>
                    </div>

                    <div className="spacer">
                        <div>
                            <div className="left-col-edit">
                                <h2 className="edit-heading">Project location</h2>
                                <h4 className="edit-subhead">Enter the location that best describes where your country is based.</h4>
                            </div>
                            <div className="right-col-edit">
                                <select className="edit-input" onChange={this.handleUpdate("location")}>
                                    <option value={this.props.project.location}>
                                        {this.props.project.location}
                                    </option>
                                    {locations.map(loc => {
                                        if (loc != this.props.project.location) {
                                            return <option value={loc}>{loc.split("-").join(" ")}</option>
                                        }
                                    })}
                                </select>
                            </div> 
                        </div>    
                    </div>

                    <div className="spacer">
                        <div>
                            <div className="left-col-edit">
                                <h2 className="edit-heading">Funding goal</h2>
                                <h4 className="edit-subhead">Set an achievable goal that covers what you need to complete your project.</h4>
                            </div>
                            <div className="right-col-edit">
                                <input className="edit-input" type="number" placeholder={this.props.project.funding_goal || "10,000"} onChange={this.handleUpdate("funding_goal")} />
                            </div>    
                        </div>
                    </div>

                    <div className="spacer">
                        <div className="update-container">
                            <button className="update-btn" type="submit" onClick={this.handleSubmit}>Update Info</button>
                        </div>        
                    </div>   
                </form>

                <div className="spacer">
                    <div>
                        <div className="left-col-edit">
                            <h2 className="edit-heading">Add reward</h2>
                            <RewardBuild project={this.props.project} projectId={this.props.project.id} createReward={this.props.createReward} handleAddReward={this.handleAddReward} />
                        </div>
                        <div className="right-col-edit">
                            <h2>Rewards</h2>
                            <div className="edit-rewards-container">
                                <RewardsIndex rewards={this.props.project.rewards} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProjectBuild;