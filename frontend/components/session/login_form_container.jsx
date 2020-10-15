import { loginUser } from "../../actions/session";
import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { receiveSessionErrors } from '../../actions/session';

const mapStateToProps = state => ({
    errors: Object.values(state.errors.sessionErrors)
});

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user)),
    clearErrors: () => dispatch(receiveSessionErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);