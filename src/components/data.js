const todoItems = [
  {
    title: 'Learn alogrithms',
    priority: 'high',
    due: '4/9/2020',
    description: 'this is just a dummy description of this todo item',
    project: 'Interview',
    complete: false,
  },
  {
    title: 'Learn alogrithms',
    priority: 'high',
    due: '4/9/2020',
    description: 'this is just a dummy description of this todo item',
    project: 'Interview',
    complete: false,
  },
  {
    title: 'Learn alogrithms',
    priority: 'high',
    due: '4/9/2020',
    description: 'this is just a dummy description of this todo item',
    project: 'House Remodelling',
    complete: false,
  },
  {
    title: 'Learn alogrithms',
    priority: 'high',
    due: '4/9/2020',
    description: 'this is just a dummy description of this todo item',
    project: 'Interview',
    complete: false,
  },
  {
    title: 'Learn alogrithms',
    priority: 'high',
    due: '4/9/2020',
    description: 'this is just a dummy description of this todo item',
    project: 'Interview',
    complete: false,
  },
];

const projects = [
  'All',
  'Interview',
  'House remodelling',
  'Interior decoration',
];

const data = {
  todoItems,
  projects,
};

function localstorage() {
  const setItems = (data) =>
    window.localStorage.setItem('data', JSON.stringify(data));

  const getItems = () => JSON.parse(window.localStorage.getItem('data'));
  return { setItems, getItems };
};

localstorage();

export default data;
