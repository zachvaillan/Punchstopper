import { Redirect, Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ProjectFormContainer from './home/new/project_form_container';
import Home from './home/splash/projects_index_container';
import ProjectShowContainer from './home/show/show_container';
import React from 'react';
import { AuthRoute } from '../utils/route_utils';

export default () => (
    
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects/new" component={ProjectFormContainer} />
            <Route path="/projects/:projectId" component={ProjectShowContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);