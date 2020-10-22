import React from 'react';

class ProjectBuild extends React.Component{
    construcotr(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
    }

    handleSubmit(e){
        e.preventDefault();
        let project = Object.assign({}, this.state);
        delete project.page;
        this.props.createProject(project)
            .then(() => this.props.history.push('/'));
    }

    render(){
        if (!this.props.project) return null;

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h2>Image URL</h2>
                        <h4>Choose a picture that represents your project.</h4>
                        <input type="text" placeholder="website.com/picture.png"/>
                    </div>
                    <div>
                        <h2>Project title</h2>
                        <h4>Write a clear brief title that helps people quickly understand the gist of your project.</h4>
                        <input type="text" placeholder=""/>
                    </div>
                    <div>
                        <h2>Project category</h2>
                        <h4>Choose the category that most closely aligns with your project.</h4>
                        <input type="text"/>
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
                    <div>
                        <h2>Project location</h2>
                        <h4>Enter the location that best describes where your country is based.</h4>
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
                    <div>
                        <h2>Funding goal</h2>
                        <h4>Set an achievable goal that covers what you need to complete your project.</h4>
                        <input type="text" placeholder="10,000"/>
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}

export default ProjectBuild;