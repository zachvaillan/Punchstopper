export const getProjects = () => {
    return $.ajax({
        url: `api/projects`,
        method: `GET`
    });
};

export const getProjectsByCategory = category => {
    return $.ajax({
        url: `api/projectsin/${category}`,
        method: `GET`
    });
};

export const getProject = projectId => {
    return $.ajax({
        url: `api/projects/${projectId}`,
        method: `GET`
    });
};

export const postProject = project => {
    return $.ajax({
        url: `api/projects`,
        method: `POST`,
        data: project,
        contentType: false,
        processData: false
    });
};

export const deleteProject = () => {
    return $.ajax({
        url: `api/projects`,
        method: `DELETE`
    });
};

export const patchProject = (projectId, project) => {
    return $.ajax({
        url: `api/projects/${projectId}`,
        method: `PATCH`,
        data: project,
        contentType: false,
        processData: false
    });
};

export const patchProjectBacking = (projectId, project) => {
    return $.ajax({
        url: `api/projects/${projectId}`,
        method: `PATCH`,
        data: { project }
    });
};