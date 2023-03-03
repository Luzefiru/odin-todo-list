import { Todo, createProject } from './model';
import ViewModule from './view';
import ProjectDataHandler from './controller';

// const addTaskBtn = document.querySelector('.add-task-btn');
// addTaskBtn.addEventListener('click', () => {

// })

ViewModule.initializeAddATaskButton();

const eatFood = Todo.createTodoItem('Eat Food', 'eat food in the diner', 5, 'please do it');
const sleep = Todo.createTodoItem('Sleep', 'sleepy time', 1, 'weeee');
const home = createProject('Home');
home.addListItem(eatFood);
home.addListItem(sleep);
console.log(home.getTodo());

ProjectDataHandler.addProject(home);
console.log('Project list:', ProjectDataHandler.getProjectList());
console.log('Project name', home.getName());
ProjectDataHandler.selectProject(home);
console.log('Selected Project:', ProjectDataHandler.getSelectedProject());
