import { Todo, createProject } from './model';
import ViewModule from './view';
import ProjectDataHandler from './controller';

// initiatlizes the default project & selects it for appending tasks with the Add A Task Form
const home = createProject('Home');
ProjectDataHandler.addProject(home);
ProjectDataHandler.selectProject(home);

// initializes the AddATaskButton in that project
ViewModule.initializeAddATaskButton();

ViewModule.renderProjectTasks();
