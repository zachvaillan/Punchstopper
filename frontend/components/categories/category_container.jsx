import React from 'react';
import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { fetchProjectsByCategory } from '../../actions/projects';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    category: ownProps.match.params.category,
    projects: Object.values(state.projects)
});

const mapDispatchToProps = dispatch => ({
    fetchProjectsByCategory: category => dispatch(fetchProjectsByCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);