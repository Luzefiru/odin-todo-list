const ProjectDataHandler = (function () {
  const projectList = {};
  let selectedProject = null;
  // selects a project via its name in the {projectList} as the {selectedProject}
  const selectProject = function (ProjectName) {
    selectedProject = projectList[ProjectName];
  };
  // appends a Project to projectList (YOU MUST ALWAYS DO THIS BEFORE OTHER FUNCTIONS)
  const addProject = function (Project) {
    projectList[Project.getName()] = Project;
  };
  // deletes a Project using its string name
  const deleteProject = function (ProjectName) {
    delete projectList[ProjectName];
  };
  const getProjectList = function () {
    return projectList;
  };
  return {
    selectProject,
    addProject,
    deleteProject,
    getProjectList,
  };
})();

export default ProjectDataHandler;
