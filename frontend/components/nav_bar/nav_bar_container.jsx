import { logoutUser } from '../../actions/session';
import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)