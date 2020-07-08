import utils from '../utils';

const handleAddProject = (event) => {
  const { target } = event;
  const userInput = document.getElementById('user-project').value;
};

let addProject = utils.make('form', 'project-form');
addProject.addEventListener('submit', handleAddProject);
let formGroup = utils.make('div', 'form-group');
const project = utils.make('input', 'form-control', undefined, {
  placeholder: 'Add Project',
});
project.setAttribute('id', 'user-project');
const submitProject = utils.make('button', 'btn btn-primary ', undefined, {
  type: 'submit',
});
submitProject.appendChild(document.createTextNode('submit'));

formGroup = utils.appendBulkChild(formGroup, [project, submitProject]);
addProject = utils.appendBulkChild(addProject, [formGroup]);

export default addProject;
