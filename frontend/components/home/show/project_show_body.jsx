import React from 'react';
import RewardsIndex from '../../rewards/rewards_index';

class ProjectShowBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            project: this.props.project,
            back: null
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(){
        console.log("hello")
        return e => {
            console.log(this.state)
            this.setState({
                back: {
                    backing_amount: e.target.value,
                    backer_id: this.props.currentUser.id,
                    reward_id: 1
                }
            })
        }
    }

    render(){
        if (!this.props.project.rewards) return null;

        return(
            <div className="proj-body-container">
                <div className="about-nav">Hello</div>

                <p className="story">Hello</p>

                <div className="rewards-index-sidebar">
                    <p className="support">Support</p>
                    <div className="no-reward-cont">
                        <p className="reward-amount">Pledge without a reward</p>
                        <div className="backing-input-cont">
                            <p className="dollar">$</p>
                            <input className="backing-input" type="number" onChange={this.handleUpdate()} />
                        </div>
                        <div className="gradient-cont">
                            <p className="back-it-bc">Back it because you believe in it.</p>
                            <p className="reward-info">Support the project for no reward, just because it speaks to you.</p>
                        </div>
                        <button className="support-back"
                            onClick={() => this.props.addBack(this.props.project.id, this.state.project, this.state.back)}>
                            Continue
                        </button>
                    </div>
                    <RewardsIndex currentUser={this.props.currentUser} addBack={this.props.addBack} rewards={this.props.project.rewards} project={this.props.project} />
                </div>
            </div>
        )
    }
}

export default ProjectShowBody