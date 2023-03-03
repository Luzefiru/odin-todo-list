import { Todo, createProject } from './model';
import ViewModule from './view';
import ProjectDataHandler from './controller';

// // initiatlizes the default project & selects it for appending tasks with the Add A Task Form
// const home = createProject('Home');
// ProjectDataHandler.addProject(home);
// ProjectDataHandler.selectProject(home);
// console.log('Selected Project:', ProjectDataHandler.getSelectedProject());

// // initializes the AddATaskButton in that project
// ViewModule.initializeAddATaskButton();

// initiatlizes the default project & selects it for appending tasks with the Add A Task Form
const home = createProject('Home');
ProjectDataHandler.addProject(home);
ProjectDataHandler.selectProject(home);
console.log('Selected Project:', ProjectDataHandler.getSelectedProject());

const work = createProject('Work');
ProjectDataHandler.addProject(work);
ProjectDataHandler.selectProject(work);

console.log('Project List', ProjectDataHandler.getProjectList());

ProjectDataHandler.deleteProject(home);

console.log('Project List', ProjectDataHandler.getProjectList());

// initializes the AddATaskButton in that project
ViewModule.initializeAddATaskButton();
