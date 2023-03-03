import { Todo, createProject } from './model';

// const addTaskBtn = document.querySelector('.add-task-btn');
// addTaskBtn.addEventListener('click', () => {

// })

const eatFood = Todo.createTodoItem('Eat Food', 'eat food in the diner', 5, 'please do it');
const sleep = Todo.createTodoItem('Sleep', 'sleepy time', 1, 'weeee');
const home = createProject('Home');
home.addListItem(eatFood);
home.addListItem(sleep);
console.log(home.getTodo());
