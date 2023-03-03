import { Todo } from './model';
import ProjectDataHandler from './controller';

const ViewModule = (function () {
  const _removeProjectTasks = function () {
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = '<button class="add-task-btn"><img src="../res/plus-circle-outline.svg"> Add a Task</button>';
    initializeAddATaskButton();
  };
  const renderProjectTasks = function () {
    // remove all currently displayed cards before rendering them
    _removeProjectTasks();
    const selectedProjectTodoList = ProjectDataHandler.getSelectedProject().getTodo();
    for (let ind = 0; ind < selectedProjectTodoList.length; ind++) {
      const { title, description, dueDate } = selectedProjectTodoList[ind];
      const taskCardInnerHTML = `<div class="task__title">${title}</div>
        <button class="task__details-btn modal-open">DETAILS</button>
        <div class="task__due-date">${dueDate}</div>
        <button class="task__delete-btn"></button>
        <dialog class="task--modal hidden">
          <button class="task--modal__exit-btn modal-close"></button>
          <div class="task--modal__title">
            ${title}
          </div>
          <div class="task--modal__description">
           ${description}
          </div>
          <div class="task--modal__due-date">
            ${dueDate}
          </div>
        </dialog>`;
      const currentItemID = selectedProjectTodoList[ind].id;
      const newCard = document.createElement('div');
      newCard.classList.add('card--task');
      newCard.setAttribute('task-id', currentItemID);
      newCard.innerHTML = taskCardInnerHTML;
      // adds the card to the container before the Add New Task button to be in ascending order
      document.querySelector('.add-task-btn').before(newCard);
      console.log(ind, currentItemID, taskCardInnerHTML); // debug
      // gives functionalities to the cards' modal buttons
      const modal = document.querySelector(`[task-id="${currentItemID}"] .task--modal`);
      const modalOpenBtn = document.querySelector(`[task-id="${currentItemID}"] .modal-open`);
      const modalCloseBtn = document.querySelector(`[task-id="${currentItemID}"] .modal-close`);
      modalOpenBtn.addEventListener('click', () => {
        modal.showModal();
        modal.classList.toggle('hidden');
      });
      modalCloseBtn.addEventListener('click', () => {
        modal.close();
        modal.classList.toggle('hidden');
      });
      // gives functionality to the delete task button
      const deleteTaskBtn = document.querySelector(`[task-id="${currentItemID}"] .task__delete-btn`);
      deleteTaskBtn.addEventListener('click', () => {
        ProjectDataHandler.getSelectedProject().removeListItem(currentItemID);
        renderProjectTasks();
      });
    }
  };
  const _renderAddTaskPrompt = function () {
    // disallows multiple form prompts to be rendered on the same window
    if (document.querySelector('form') !== null) {
      console.log('ERROR: Add a Task Form already present!');
      return;
    }
    const formInnerHTML = `<label class="form--add-task__label" for="title">Title</label>
      <input class="form--add-task__input" id="title" type="text" name="Task Title" placeholder="What to do?" required>
      <label class="form--add-task__label" for="desciption">Description (optional)</label>
      <textarea class="form--add-task__input" id="description" type="text" name="Task Description" placeholder="e.g. Coordinate with teammates via Zoom"></textarea>
      <label class="form--add-task__label" for="dueDate">Due Date</label>
      <input class="form--add-task__input" id="dueDate" type="date" name="Task Due Date" required>
      <div class="form--add-task__buttons">
        <button class="buttons__add type="submit">Add</button><button class="buttons__cancel" type="button">Cancel</button>
      </div>`;
    // adds the form to the content container before the "Add a Task" button
    const newForm = document.createElement('form');
    // function to remove the prompt later
    const removeAddTaskPrompt = function () {
      document.querySelector('.content').removeChild(newForm);
    };
    newForm.classList.add('form--add-task');
    newForm.innerHTML = formInnerHTML;
    document.querySelector('.add-task-btn').before(newForm);
    // gives functionality to its "Cancel" button to remove the form and not make changes
    const cancelBtn = document.querySelector('.buttons__cancel');
    cancelBtn.addEventListener('click', () => { removeAddTaskPrompt(); });
    // gives functionality to the "Add" button to append a task to current project's todoList
    const addBtn = document.querySelector('.buttons__add');
    addBtn.addEventListener('click', (e) => {
      // prevent default form submission
      e.preventDefault();
      // get the form input data values
      const titleInput = document.querySelector('#title').value;
      const descriptionInput = document.querySelector('#description').value;
      let dueDateInput = new Date(document.querySelector('#dueDate').value);
      // convert date to standardized format
      dueDateInput = dueDateInput.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
      // create a new TodoItem to be appended to the selected project's Todo List then sorts it
      // IF ONLY: title & dueDate are not empty
      if (titleInput && dueDateInput !== 'Invalid Date') {
        const newTodoItem = Todo.createTodoItem(titleInput, descriptionInput, dueDateInput);
        ProjectDataHandler.getSelectedProject().addListItem(newTodoItem);
        ProjectDataHandler.getSelectedProject().sortList();
        console.log('APPENDED LIST', ProjectDataHandler.getSelectedProject().getTodo());
        removeAddTaskPrompt();
        renderProjectTasks();
      }
    });
  };
  const initializeAddATaskButton = function () {
    const addATaskBtn = document.querySelector('.add-task-btn');
    addATaskBtn.addEventListener('click', () => {
      _renderAddTaskPrompt();
    });
  };
  return { initializeAddATaskButton, renderProjectTasks };
})();

export default ViewModule;
