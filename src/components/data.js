import utils from './utils';

const todoItems = [
  {
    title: 'Data Structure',
    priority: 'High',
    due: '2020-07-10',
    description: 'This is just a dummy description of Data Structure',
    project: 'Interview',
    complete: false,
    uuid: 12,
  },
  {
    title: 'React',
    priority: 'Low',
    due: '2020-07-11',
    description: 'This is just a dummy description of React',
    project: 'Interview',
    complete: false,
    uuid: 13,
  },
  {
    title: 'Javascript',
    priority: 'High',
    due: '2020-07-04',
    description: 'This is just a dummy description of Javascript',
    project: 'Coding Challenge',
    complete: false,
    uuid: 14,
  },
  {
    title: 'Ruby',
    priority: 'Low',
    due: '2020-07-08',
    description: 'This is just a dummy description of Ruby',
    project: 'Coding Challenge',
    complete: true,
    uuid: 15,
  },
  {
    title: 'ROR',
    priority: 'High',
    due: '2020-07-20',
    description: 'This is just a dummy description of ROR',
    project: 'Interview',
    complete: false,
    uuid: 16,
  },
];

const projects = ['All', 'Interview', 'Coding Challenge'];

const itemsDatabase = new utils.Database(todoItems);
itemsDatabase.setItems('listItems');

const projectDatabase = new utils.Database(projects);
projectDatabase.setItems('projects');

function initialize() {
  window.localStorage.setItem('listItems', JSON.stringify(todoItems));
  window.localStorage.setItem('projects', JSON.stringify(projects));
  // pasteData()
}

export default initialize;
