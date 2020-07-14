import utils from '../utils';
import pasteProjects from './sidebarUtils';

const projects = utils.make('ul', 'project-container');

pasteProjects(projects);

export default projects;
