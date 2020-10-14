import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import React from 'react';
import { AuthRoute } from '../utils/route_utils';

export default () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);