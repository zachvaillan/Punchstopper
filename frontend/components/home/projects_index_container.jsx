import { fetchProjects, fetchProject } from '../../actions/projects';
import React from 'react';
import { connect } from 'react-redux';
import ProjectIndex from './projects_index';

const mapStateToProps = state => ({
    projects: Object.values(state.projects)
});

const mapDispatchToProps = dispatch => ({
    fetchProjects: projects => dispatch(fetchProjects(projects)),
    fetchProject: projectId => dispatch(fetchProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);