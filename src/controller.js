const ProjectDataHandler = (function () {
  const _projectList = {};
  // Selected Project is where the ViewModule appends all the todo list items to
  let selectedProject = null;
  // returns the selected project using closure
  const getSelectedProject = function () {
    return selectedProject;
  };
  // selects a project via its name in the {_projectList} as the {selectedProjectName}
  const selectProject = function (Project) {
    selectedProject = _projectList[Project.getName()];
  };
  // appends a Project to _projectList
  const addProject = function (Project) {
    _projectList[Project.getName()] = Project;
  };
  // deletes a Project using its string name
  const deleteProject = function (Project) {
    delete _projectList[Project.getName()];
  };
  // returns the _projectList dictionary containing the name of the projects & their object models
  const getProjectList = function () {
    return _projectList;
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
