import utils from './utils';

const todoItems = [
  {
    title: 'Learn alogrithms',
    priority: 'high',
    due: '4/9/2020',
    description: 'this is just a dummy description of this todo item',
    project: 'Interview',
    complete: false,
    uuid: 12,
  },
  {
    title: 'Learn alogrithms',
    priority: 'high',
    due: '4/9/2020',
    description: 'this is just a dummy description of this todo item',
    project: 'Interview',
    complete: false,
    uuid: 13,
  },
  {
    title: 'Learn alogrithms',
    priority: 'high',
    due: '4/9/2020',
    description: 'this is just a dummy description of this todo item',
    project: 'House Remodelling',
    complete: false,
    uuid: 14,
  },
  {
    title: 'Learn alogrithms',
    priority: 'high',
    due: '4/9/2020',
    description: 'this is just a dummy description of this todo item',
    project: 'Interview',
    complete: false,
    uuid: 15,
  },
  {
    title: 'Learn alogrithms',
    priority: 'high',
    due: '4/9/2020',
    description: 'this is just a dummy description of this todo item',
    project: 'Interview',
    complete: false,
    uuid: 16,
  },
];

const projects = [
  'All',
  'Interview',
  'House remodelling',
  'Interior decoration',
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
