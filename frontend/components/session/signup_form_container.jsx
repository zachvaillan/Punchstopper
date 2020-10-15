import { createUser } from "../../actions/session";
import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { receiveSessionErrors } from '../../actions/session';

const mapStateToProps = state => ({
    errors: Object.values(state.errors.sessionErrors)
});

const mapDispatchToProps = dispatch => ({
    createUser: (user) => dispatch(createUser(user)),
    clearErrors: () => dispatch(receiveSessionErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);