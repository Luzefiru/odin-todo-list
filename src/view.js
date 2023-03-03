const newProjectFormHTML = `<form class="new-proj">
<input class="form__text new-proj" type="text" name="projectName" id="projectName">
<button class="form__btn new-proj" type="button"><img src="../res/check-bold.svg"></button>
</form>`;

const ProjectPrompt = (function () {
  const addPromptNewProject = function () {
    const sidebar = document.querySelector('aside');
    sidebar.innerHTML += newProjectFormHTML;
  };
  const removePromptNewProject = function () {
    const sidebar = document.querySelector('aside');
    sidebar.removeChild(document.querySelector('form'));
  };
  return { addPromptNewProject, removePromptNewProject };
})();

export default ProjectPrompt;
