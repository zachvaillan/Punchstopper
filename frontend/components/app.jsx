import { Redirect, Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ProjectFormContainer from './home/new/project_form_container';
import Home from './home/splash/projects_index_container';
import ProjectShowContainer from './home/show/show_container';
import ProjectEditContainer from './edit/project_edit_form_container';
import UserProjectsContainer from './user/user_proj_container';
import CategoryContainer from './categories/category_container';
import React from 'react';
import { AuthRoute } from '../utils/route_utils';

export default () => (
    
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects/new" component={ProjectFormContainer} />
            <Route exact path="/projects/:projectId/edit" component={ProjectEditContainer} />
            <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/:userId" component={UserProjectsContainer} />
            <Route exact path="/projects/:category" component={CategoryContainer} />
        </Switch>
    </div>
);