import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBar from './nav_bar/nav_bar';
import React from 'react';

export default () => (
    <div>
        <Route path="/" component={NavBar} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);