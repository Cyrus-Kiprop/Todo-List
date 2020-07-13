import utils from './utils';

const todoItems = [
  {
    title: 'Data Structure',
    priority: 'high',
    due: '10/7/2020',
    description: 'this is just a dummy description of Data Structure',
    project: 'Interview',
    complete: false,
    uuid: 12,
  },
  {
    title: 'React',
    priority: 'average',
    due: '11/7/2020',
    description: 'this is just a dummy description of React',
    project: 'Interview',
    complete: false,
    uuid: 13,
  },
  {
    title: 'Javascript',
    priority: 'high',
    due: '04/7/2020',
    description: 'this is just a dummy description of Javascript',
    project: 'Coding Challenge',
    complete: false,
    uuid: 14,
  },
  {
    title: 'Ruby',
    priority: 'low',
    due: '08/07/2020',
    description: 'this is just a dummy description of Ruby',
    project: 'Coding Challenge',
    complete: true,
    uuid: 15,
  },
  {
    title: 'ROR',
    priority: 'high',
    due: '11/07/2020',
    description: 'this is just a dummy description of ROR',
    project: 'Interview',
    complete: false,
    uuid: 16,
  },
];

const projects = [
  'All',
  'Interview',
  'Coding Challenge'
];

const itemsDatabase = new utils.Database(todoItems);
itemsDatabase.setItems('listItems');
const projectDatabase = new utils.Database(projects);
projectDatabase.setItems('projects');

const data = {
  todoItems: itemsDatabase.getItems('listItems'),
  projects: projectDatabase.getItems('projects'),
};

export default data;
