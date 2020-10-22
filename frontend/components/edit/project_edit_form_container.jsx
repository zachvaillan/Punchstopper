import { fetchProject } from '../../../actions/session';
import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => ({
    project: state.projects[ownProps.match.params.projectId]
})

const mapDispatchToProps = dispatch => ({
    fetchProject: project => dispatch(fetchProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);