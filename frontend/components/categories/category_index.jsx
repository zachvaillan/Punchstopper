import React from 'react';


class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        this.props.fetchProjectsByCategory(this.props.category.slice(0, 1).toUpperCase()
        + this.props.category.slice(1));
    }

    render() {
        if (!this.props.projects) return null;

        return (
            <div>
                {console.log(this.props.projects)}
            </div>
        )
    }
}

export default CategoryIndex;