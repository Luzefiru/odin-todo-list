import { Todo, createProject } from './model';
import ViewModule from './view';
import ProjectDataHandler from './controller';

// initiatlizes the default project & selects it for appending tasks with the Add A Task Form
const home = createProject('Home');
const work = createProject('Work');
ProjectDataHandler.addProject(home);
ProjectDataHandler.addProject(work);
ProjectDataHandler.selectProject(home);
console.log('selected project', ProjectDataHandler.getSelectedProject());

// initializes the AddATaskButton in that project
ViewModule.initializeAddATaskButton();
ViewModule.initializeProjectButtons();
ViewModule.initializeNewProjectButton();
