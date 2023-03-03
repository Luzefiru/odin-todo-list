import ProjectPrompt from './view';

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
        console.log(projectNameInput);
      });
    } else if (display === true) {
      ProjectPrompt.removePromptNewProject();
      display = false;
    }
  });
})();

export default SidebarFunctionalities;
