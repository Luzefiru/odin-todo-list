import ProjectPrompt from './view';
import { createProject, projectList } from './model';

const SidebarFunctionalities = (function () {
  const newProjectBtn = document.querySelector('.aside__category--projects__btn');
  let display = false;
  newProjectBtn.addEventListener('click', () => {
    if (display === false) {
      ProjectPrompt.addPromptNewProject();
      display = true;
      const checkBtn = document.querySelector('.form__btn.new-proj > img');
      checkBtn.addEventListener('click', () => {
        const projectNameInput = document.querySelector('.form__text.new-proj').value;
        const newProject = createProject(projectNameInput);
        projectList.push(newProject);
        ProjectPrompt.removePromptNewProject();
        display = false;
        console.log(projectList);
      });
    } else if (display === true) {
      ProjectPrompt.removePromptNewProject();
      display = false;
    }
  });
})();

export default SidebarFunctionalities;
