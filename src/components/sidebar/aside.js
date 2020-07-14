/* eslint-disable import/no-mutable-exports */
import utils from '../utils';
import projects from './project';

const asideLogo = utils.make(
  'a',
  'img aside-logo rounded-circle mb-5',
  undefined,
  {
    style: 'background-image: url(../../assets/images/todo-logo.png)',
  },
);

let asideContainer = utils.make('div', 'aside-container w-100 p-4 pt-5');
asideContainer = utils.appendBulkChild(asideContainer, [asideLogo, projects]);

export default asideContainer;
