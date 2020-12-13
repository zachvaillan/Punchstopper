import {postProject, getProjects, getProject, deleteProject, patchProject,
    getProjectsByCategory} from '../utils/projects';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";

const receiveAllProjects = projects => ({
    type: RECEIVE_ALL_PROJECTS,
    projects
});

const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
});

const removeProject = () => ({
    type: RECEIVE_PROJECT
});

export const createProject = project => dispatch => (
    postProject(project)
        .then( project => dispatch(receiveProject(project)))
);

export const updateProject = (projectId, project) => dispatch => (
    patchProject(projectId, project)
        .then( project => console.log(project))
)

export const fetchProject = projectId => dispatch => (
    getProject(projectId)
        .then( project => dispatch(receiveProject(project)))
);

export const fetchProjects = projects => dispatch => (
    getProjects(projects)
        .then( (projects) => dispatch(receiveAllProjects(projects)))
);

export const fetchProjectByCategory = projects => dispatch => {
    getProjectsByCategory(projects)
        .then( (projects) => dispatch(receiveAllProjects(projects)))
}

export const destroyProject = () => dispatch => (
    deleteProject()
        .then( () => dispatch(removeProject()))
);