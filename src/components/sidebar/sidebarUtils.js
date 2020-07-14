import utils from '../utils';
import pasteData from '../todoListItems/listUtils';

const projectFilter = (event) => {
  const { target } = event;

  const allLinks = document.getElementsByClassName('links');
  Array.from(allLinks).forEach((anchor) => anchor.classList.remove('active'));

  target.classList.add('active');

  const inText = target.innerText;

  const listTitle = document.getElementsByClassName('list-title')[0];
  listTitle.innerText = '';
  listTitle.appendChild(document.createTextNode(inText));

  let newData = [];
  const data = JSON.parse(window.localStorage.getItem('listItems'));
  data.forEach((item) => {
    const listItemWrapper = document.getElementsByClassName(
      'list-item-wrapper',
    )[0];
    if (inText === 'All') {
      newData = data;
    } else if (item.project === inText) {
      newData.push(item);
    }

    pasteData(newData, listItemWrapper);
  });
};

const dltProject = ({ target }) => {
  const oldProject = JSON.parse(window.localStorage.getItem('projects'));
  const oldListItems = JSON.parse(window.localStorage.getItem('listItems'));

  const parent = target.parentNode.parentNode.parentNode;
  const child = target.parentNode.parentNode;

  const current = child.childNodes[0].childNodes[0].textContent;
  const newProjects = oldProject.filter((item) => item !== current);

  const newListItems = oldListItems.filter((item) => item.project !== current);

  window.localStorage.removeItem('listItems');
  window.localStorage.removeItem('newProjects');

  window.localStorage.setItem('listItems', JSON.stringify(newListItems));
  window.localStorage.setItem('projects', JSON.stringify(newProjects));

  pasteData(
    newListItems,
    document.getElementsByClassName('list-item-wrapper')[0],
  );

  parent.remove(child);
};

const pasteProjects = function pasteProjects(projects, filter = projectFilter) {
  JSON.parse(window.localStorage.getItem('projects')).forEach((project) => {
    const proItem = utils.make('div', 'd-flex justify-content-between');
    const li = utils.make('li', 'd-flex flex-column project-item ');
    const deleteBtn = utils.make('button', 'btn   action-btn');
    const dltIcon = utils.make('i', 'fa fa-times-circle-o ml-auto');
    deleteBtn.appendChild(dltIcon);
    const link = utils.make('a', 'links', undefined, {
      href: '#',
    });
    const text = document.createTextNode(project);
    link.appendChild(text);

    deleteBtn.addEventListener('click', dltProject);

    link.addEventListener('click', filter);
    proItem.appendChild(link);
    if (link.textContent !== 'All') proItem.appendChild(deleteBtn);
    li.appendChild(proItem);
    projects.appendChild(li);
  });
};

export default pasteProjects;
