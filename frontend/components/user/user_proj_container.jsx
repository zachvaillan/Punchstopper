import React from 'react';
import { connect } from 'react-redux';
import UserProjects from './home/user_proj_index';
import { fetchProjects } from '../../actions/projects';

const mapStateToProps = state => ({
    projects: state.projects,
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    fetchProjects: projects => dispatch(fetchProjects(projects))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);