export const getProjects = projects => {
    return $.ajax({
        url: `api/projects`,
        method: `GET`
    });
};

export const getProject = project => {
    return $.ajax({
        url: `api/projects/${project.id}`,
        method: `GET`
    });
};

export const postProject = project => {
    return $.ajax({
        url: `api/projects`,
        method: `POST`,
        data: { project }
    });
};

export const deleteProject = () => {
    return $.ajax({
        url: `api/projects`,
        method: `DELETE`
    });
};