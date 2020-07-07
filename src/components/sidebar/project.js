import utils from '../utils';
import data from '../data';

const filter = (event) => {
  const { target } = event;

  const allLinks = document.getElementsByClassName('links');
  Array.from(allLinks).forEach((anchor) => anchor.classList.remove('active'));

  target.classList.add('active');
};

const projects = utils.make('ul', 'project-container');

data.projects.forEach((project) => {
  const li = utils.make('li', 'd-flex flex-column project-item');
  const link = utils.make('a', 'links', undefined, {
    href: '#',
  });

  link.addEventListener('click', filter);
  const text = document.createTextNode(project);

  link.appendChild(text);
  li.appendChild(link);
  projects.appendChild(li);
});

export default projects;
