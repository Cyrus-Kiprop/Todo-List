import utils from '../utils';

let asideContainer = utils.make('div', 'aside-container w-100 p-4 pt-5');

const asideLogo = utils.make(
  'a',
  'img aside-logo rounded-circle mb-5',
  undefined,
  {
    style: 'background-image: url(../../assets/images/todo-logo.png)',
  }
);

asideContainer = utils.appendBulkChild(asideContainer, [asideLogo]);

export default asideContainer;
