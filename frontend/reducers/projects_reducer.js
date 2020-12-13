import {RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, DELETE_PROJECT} from '../actions/projects';


const projectsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch(action.type){
        case RECEIVE_PROJECT:
            console.log(action)
            nextState[action.project.id] = action.project;
            return nextState;
        case RECEIVE_ALL_PROJECTS:
            const projects = {};
            action.projects.forEach( project => projects[project.id] = project);
            return projects;
        default: 
            return oldState;
    };
};

export default projectsReducer;