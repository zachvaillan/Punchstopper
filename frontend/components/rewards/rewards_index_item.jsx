import React from 'react';
import RewardsIndex from './rewards_index';

class RewardsIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
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
                    <p className="backers-count">### backers</p>
                </div>
            </div>
        )
    }
}

export default RewardsIndexItem;