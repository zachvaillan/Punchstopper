import React from 'react';
import RewardsIndex from './rewards_index';

class RewardsIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.state = {
            project: this.props.project,
            back: null
        }
    }

    handleUpdate() {
        return e => {
            this.setState({
                back: {
                    backing_amount: parseInt(e.target.value),
                    backer_id: this.props.currentUser.id,
                    reward_id: this.props.reward.id
                }
            })
            setTimeout(() => {
                console.log(this.state)
                let newProject = this.state.project;
                newProject.funding_amount = parseInt(newProject.funding_amount) + this.state.back.backing_amount;
                this.setState({ project: newProject });
            }, 100)
        }
    }

    render(){
        let backerCount = (!this.props.reward.backs) ? 0 : this.props.reward.backs.length

        return(
            <div className="rewards-idx-item">
                <p className="reward-amount">Pledge ${this.props.reward.min_amount} or more</p>
                <p className="reward-title">{this.props.reward.title}</p>
                <p className="reward-description">{this.props.reward.description}</p>
                <div className="rewards-idx-extra-info-cont">
                    <div className="extra-info-col">
                        <p className="reward-info-header">ESTIMATED DELIVERY</p>
                        <p className="reward-info">{this.props.reward.deliver_date}</p>
                    </div>
                    <div className="extra-info-col">
                        <p className="reward-info-header">SHIPS TO</p>
                        <p className="reward-info">Anywhere in the world</p>
                    </div>
                    <p className="backers-count">{backerCount} backers</p>
                    <div className="backing-container">
                        <input type="number" onChange={this.handleUpdate()} />
                        <button onClick={() => this.props.addBack(this.props.project.id, this.state.project, this.state.back)}>Add Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RewardsIndexItem;