import { createUser } from "../../actions/session";
import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapDispatchToProps = dispatch => ({
    createUser: (user) => dispatch(createUser(user))
});

export default connect(null, mapDispatchToProps)(SignupForm);