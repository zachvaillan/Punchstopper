import {RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, DELETE_PROJECT} from '../actions/projects';


const projectsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_PROJECT:
            return Object.assign({}, oldState, {[action.project.id]: action.project});
        case RECEIVE_ALL_PROJECTS:
            const projects = {};
            action.projects.forEach( project => projects[project.id] = project);
            return projects;
        default: 
            return oldState;
    };
};

export default projectsReducer;