import { fetchProject, addBackingAmount } from '../../../actions/projects';
import { createBack } from '../../../actions/backs';
import React from 'react';
import { connect } from 'react-redux';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
    project: state.projects[ownProps.match.params.projectId],
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    addBackingAmount: (projectId, project) => dispatch(addBackingAmount(projectId, project)),
    createBack: back => dispatch(createBack(back))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);