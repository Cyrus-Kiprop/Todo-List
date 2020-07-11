import utils from '../utils';
import data from '../data';
import pasteData from '../todoListItems/listUtils';
import pasteProjects from './sidebarUtils';

const projects = utils.make('ul', 'project-container');

pasteProjects(projects);

export default projects;
