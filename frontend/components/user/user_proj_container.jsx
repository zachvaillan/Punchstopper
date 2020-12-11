import React from 'react';
import { connect } from 'react-redux';
import UserProjects from './user_proj_index';
import { fetchUser } from '../../actions/user';

const mapStateToProps = (state, ownProps) => ({
    user: ownProps.match.params.userId,
    userPage: state.user
});

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);