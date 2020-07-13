import utils from '../utils';
import pasteProjects from '../sidebar/sidebarUtils';

const handleAddProject = (event) => {
  const { target } = event;
  const userInput = document.getElementById('user-project').value;
  const projects = JSON.parse(window.localStorage.getItem('projects'));
  projects.push(userInput);
  window.localStorage.removeItem('projects');
  window.localStorage.setItem('projects', JSON.stringify(projects));

  const projectContainer = document.getElementsByClassName(
    'project-container',
  )[0];
  projectContainer.innerHTML = '';
  pasteProjects(projectContainer);
  const itemsDatabase = new utils.Database(todoItems);
};

let addProject = utils.make('form', 'project-form');
addProject.addEventListener('submit', handleAddProject);
let formGroup = utils.make('div', 'form-group d-flex mb-0');
const project = utils.make('input', 'form-control mr-2', undefined, {
  placeholder: 'Add Project',
});
project.setAttribute('id', 'user-project');
const submitProject = utils.make(
  'button',
  'btn btn-outline-success ',
  undefined,
  {
    type: 'submit',
  },
);
submitProject.appendChild(document.createTextNode('submit'));

formGroup = utils.appendBulkChild(formGroup, [project, submitProject]);
addProject = utils.appendBulkChild(addProject, [formGroup]);

export default addProject;
