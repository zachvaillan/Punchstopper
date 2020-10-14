import { fetchProject } from '../../actions/session';
import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { createProject } from '../../actions/projects';


const mapDispatchToProps = dispatch => ({
    createProject: project => dispatch(createProject(project))
});

export default connect(null, mapDispatchToProps)(ProjectForm);