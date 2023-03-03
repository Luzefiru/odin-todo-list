import { Todo, createProject } from './model';
import ViewModule from './view';
import ProjectDataHandler from './controller';

// initiatlizes the default project & selects it for appending tasks with the Add A Task Form
const home = createProject('Home');
ProjectDataHandler.addProject(home);
ProjectDataHandler.selectProject(home);
console.log('Selected Project:', ProjectDataHandler.getSelectedProject());

// initializes the AddATaskButton in that project
ViewModule.initializeAddATaskButton();

const modal = document.querySelector('.task--modal');
const modalOpenBtn = document.querySelector('.modal-open');
modalOpenBtn.addEventListener('click', () => {
  modal.showModal();
});
