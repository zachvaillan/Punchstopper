import React from 'react';

class RewardBuild extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            project_id: this.props.projectId
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleUpdate(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let reward = Object.assign({}, this.state);
        this.props.createReward(reward)
            .then( () => this.props.history.push(`/projects/${this.props.projectId}/edit`))
    }

    render(){
        return(
            <form>
                <p>Title</p>
                <input type="text" onChange={this.handleUpdate("title")} />
                <p>Description</p>
                <input type="text" onChange={this.handleUpdate("description")} />
                <p>Delivery Date</p>
                <input type="date" onChange={this.handleUpdate("deliver_date")} />
                <p>Minimum Amount</p>
                <input type="number" onChange={this.handleUpdate("min_amount")} />
                <button type="submit" onClick={this.handleSubmit}>Create Reward</button>
            </form>
        )
    }

}

export default RewardBuild;