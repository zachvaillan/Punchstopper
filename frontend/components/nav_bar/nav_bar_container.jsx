import { logoutUser } from '../../actions/session';
import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { withRouter } from 'react-router';


const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))