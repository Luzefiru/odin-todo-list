const ProjectDataHandler = (function () {
  const projectList = {};
  let selectedProject = null;
  // returns the selected project using closure
  const getSelectedProject = function () {
    return selectedProject;
  };
  // selects a project via its name in the {projectList} as the {selectedProjectName}
  const selectProject = function (Project) {
    selectedProject = projectList[Project.getName()];
  };
  // appends a Project to projectList
  const addProject = function (Project) {
    projectList[Project.getName()] = Project;
  };
  // deletes a Project using its string name
  const deleteProject = function (Project) {
    delete projectList[Project.getName()];
  };
  // returns the projectList dictionary containing the name of the projects & their object models
  const getProjectList = function () {
    return projectList;
  };
  return {
    getSelectedProject,
    selectProject,
    addProject,
    deleteProject,
    getProjectList,
  };
})();

export default ProjectDataHandler;
