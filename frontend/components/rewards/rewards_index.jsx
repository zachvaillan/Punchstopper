import React from 'react';
import RewardsIndexItem from './rewards_index_item';

class RewardsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul>
                {this.props.rewards.map(reward => {
                    return <li className="reward-idx-li" key={reward.id}><RewardsIndexItem currentUser={this.props.currentUser} project={this.props.project} addBack={this.props.addBack} reward={reward} /></li>
                })}
            </ul>
        )
    }
}

export default RewardsIndex;