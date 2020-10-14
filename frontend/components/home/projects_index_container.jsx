import { logoutUser } from '../../actions/session';
import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mapStateToProps = state => ({
    projects: Object.values(state.projects)
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});