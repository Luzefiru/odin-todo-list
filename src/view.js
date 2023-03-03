import { Todo } from './model';
import ProjectDataHandler from './controller';

const ViewModule = (function () {
  const _renderAddTaskPrompt = function () {
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
      const dueDateInput = document.querySelector('#dueDate').value;
      // create a new TodoItem to be appended to the selected project's Todo List
      // IF ONLY: title & dueDate are not empty
      if (titleInput && dueDateInput) {
        const newTodoItem = Todo.createTodoItem(titleInput, descriptionInput, dueDateInput);
        ProjectDataHandler.getSelectedProject().addListItem(newTodoItem);
        console.log('APPENDED LIST', ProjectDataHandler.getSelectedProject().getTodo());
        removeAddTaskPrompt();
      }
    });
  };
  const initializeAddATaskButton = function () {
    const addATaskBtn = document.querySelector('.add-task-btn');
    addATaskBtn.addEventListener('click', () => {
      _renderAddTaskPrompt();
    });
  };

  return { initializeAddATaskButton };
})();

export default ViewModule;
