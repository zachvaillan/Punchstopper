import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ProjectIndexItem project={this.props.project}/>
        )
    }
}