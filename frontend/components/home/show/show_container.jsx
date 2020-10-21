import { fetchProject } from '../../../actions/projects';
import React from 'react';
import { connect } from 'react-redux';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
    project: state.projects[ownProps.match.params.projectId]
});

const mapDispatchToProps = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);