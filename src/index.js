import { Todo, createProject } from './model';
import ViewModule from './view';
import ProjectDataHandler from './controller';

// initiatlizes the default project & selects it for appending tasks with the Add A Task Form
const home = createProject('Home');
const work = createProject('Work');
ProjectDataHandler.addProject(home);
ProjectDataHandler.addProject(work);
ProjectDataHandler.selectProject(home);
console.log('selected project', ProjectDataHandler.getSelectedProject());

// initializes the AddATaskButton in that project
ViewModule.initializeAddATaskButton();

const projectCategoryButtons = document.querySelectorAll('.aside__category__project');
projectCategoryButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('clicked!', ProjectDataHandler.getProjectList()[btn.textContent].getTodo());
    ProjectDataHandler.selectProject(ProjectDataHandler.getProjectList()[btn.textContent]);
    ViewModule.renderProjectTasks();
    projectCategoryButtons.forEach((b) => {
      if (b.classList.contains('project--selected')) {
        b.classList.remove('project--selected');
      }
    });
    btn.classList.add('project--selected');
  });
});
