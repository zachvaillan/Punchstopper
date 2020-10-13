import { loginUser } from "../../actions/session";
import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(LoginForm);