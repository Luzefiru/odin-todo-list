import { Todo } from './model';

const ViewModule = (function () {
  const renderAddTaskPrompt = function () {
    const formInnerHTML = `<label class="form--add-task__label" for="title">Title</label>
      <input class="form--add-task__input" id="title" type="text" name="Task Title" placeholder="What to do?" required>
      <label class="form--add-task__label" for="desciption">Description (optional)</label>
      <textarea class="form--add-task__input" id="description" type="text" name="Task Description" placeholder="e.g. Coordinate with teammates via Zoom"></textarea>
      <label class="form--add-task__label" for="dueDate">Due Date</label>
      <input class="form--add-task__input" id="dueDate" type="date" name="Task Due Date" required>
      <div class="form--add-task__buttons">
        <button class="buttons__add">Add</button><button class="buttons__cancel">Cancel</button>
      </div>`;
    // adds the form to the content container before the "Add a Task" button
    const newForm = document.createElement('form');
    newForm.classList.add('form--add-task');
    newForm.innerHTML = formInnerHTML;
    document.querySelector('.add-task-btn').before(newForm);
    // gives functionality to its "Cancel" button to remove the form and not make changes
    const cancelBtn = document.querySelector('.buttons__cancel');
    cancelBtn.addEventListener('click', () => { document.querySelector('.content').removeChild(newForm); });
    // gives functionality to the "Add" button to append a task to current project's todoList
    const addBtn = document.querySelector('.buttons__add');
    addBtn.addEventListener('click', () => {
      // get the form input data values
      const titleInput = document.querySelector('#title').value;
      const descriptionInput = document.querySelector('#description').value;
      const dueDateInput = document.querySelector('#dueDate').value;
      // create a new TodoItem to be appended to the selected project's Todo List
      const newTodoItem = Todo.createTodoItem(titleInput, descriptionInput, dueDateInput);
      console.log(newTodoItem);
    });
  };

  return { renderAddTaskPrompt };
})();

export default ViewModule;
