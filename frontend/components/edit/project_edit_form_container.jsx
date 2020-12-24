import { fetchProject, updateProject } from '../../actions/projects';
import { createReward } from '../../actions/rewards';
import React from 'react';
import { connect } from 'react-redux';
import ProjectBuild from './project_edit';

const mapStateToProps = (state, ownProps) => ({
    project: state.projects[ownProps.match.params.projectId],
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    fetchProject: project => dispatch(fetchProject(project)),
    updateProject: (projectId, project) => dispatch(updateProject(projectId, project)),
    createReward: reward => dispatch(createReward(reward))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBuild);