import { Todo, createProject } from './model';
import ViewModule from './view';
import ProjectDataHandler from './controller';

// initiatlizes the default project & selects it for appending tasks with the Add A Task Form
const home = createProject('Home');
ProjectDataHandler.addProject(home);
ProjectDataHandler.selectProject(home);

// initializes the AddATaskButton in that project
ViewModule.initializeAddATaskButton();

ProjectDataHandler.getSelectedProject().addListItem(Todo.createTodoItem('Help Out', 'with friends do it', '3/3/2023'));
ProjectDataHandler.getSelectedProject().addListItem(Todo.createTodoItem('First Day of the month', 'POGGG', '3/1/2023'));
console.log('Selected Project:', ProjectDataHandler.getSelectedProject().getTodo());

ViewModule.renderProjectTasks();

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
