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
            .then( () => this.props.handleAddReward());
    }

    render(){
        return(
            <form>
                <p>Title</p>
                <input className="edit-input" type="text" onChange={this.handleUpdate("title")} />
                <p>Description</p>
                <input className="edit-input" type="text" onChange={this.handleUpdate("description")} />
                <p>Delivery Date</p>
                <input className="edit-input" type="date" onChange={this.handleUpdate("deliver_date")} />
                <p>Minimum Amount</p>
                <input className="edit-input" type="number" onChange={this.handleUpdate("min_amount")} />
                <button className="create-reward" type="submit" onClick={this.handleSubmit}>Create Reward</button>
            </form>
        )
    }

}

export default RewardBuild;