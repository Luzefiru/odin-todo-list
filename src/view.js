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
    // adds the form to the content container as the first child
    const newForm = document.createElement('form');
    newForm.classList.add('form--add-task');
    newForm.innerHTML = formInnerHTML;
    document.querySelector('.add-task-btn').before(newForm);
  };

  return { renderAddTaskPrompt };
})();

export default ViewModule;
