import React from 'react';

class MenuProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}; 
    }

    render() {

        // if (!this.state.projects || !this.props.projects) return null;

        return (

            <div>
                {console.log(this.props.projects)}
                {console.log(this.state.projects)}
            </div>
        )
    }
}

export default MenuProjects;