import { createUser } from "../../actions/session";
import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = state => ({
    errors: Object.values(state.errors.signupErrors)
});

const mapDispatchToProps = dispatch => ({
    createUser: (user) => dispatch(createUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);