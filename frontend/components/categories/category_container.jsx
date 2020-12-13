import React from 'react';
import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { fetchProjects } from '../../actions/projects';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    category: ownProps.match.params.category
});

const mapDispatchToProps = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);