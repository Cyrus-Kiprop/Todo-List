import utils from '../utils';
import data from '../data';
import projects from './project';


let asideContainer = utils.make('div', 'aside-container w-100 p-4 pt-5');

const asideLogo = utils.make(
  'a',
  'img aside-logo rounded-circle mb-5',
  undefined,
  {
    style: 'background-image: url(../../assets/images/todo-logo.png)',
  }
);

asideContainer = utils.appendBulkChild(asideContainer, [asideLogo, projects]);

export default asideContainer;
