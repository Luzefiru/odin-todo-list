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
const modalCloseBtn = document.querySelector('.modal-close');
modalOpenBtn.addEventListener('click', () => {
  modal.showModal();
  modal.classList.toggle('hidden');
});
modalCloseBtn.addEventListener('click', () => {
  modal.close();
  modal.classList.toggle('hidden');
});
