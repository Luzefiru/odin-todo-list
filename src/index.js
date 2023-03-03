import { Todo, createProject } from './model';
import ViewModule from './view';
import ProjectDataHandler from './controller';

// const addTaskBtn = document.querySelector('.add-task-btn');
// addTaskBtn.addEventListener('click', () => {

// })

// initiatlizes the default project & selects it for appending tasks with the Add A Task Form
const home = createProject('Home');
ProjectDataHandler.addProject(home);
ProjectDataHandler.selectProject(home);
console.log('Selected Project:', ProjectDataHandler.getSelectedProject());

// initializes the AddATaskButton in that project
ViewModule.initializeAddATaskButton();
