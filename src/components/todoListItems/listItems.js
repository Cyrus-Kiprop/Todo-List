import utils from '../utils';
import pasteData from './listUtils';

const listItemsWrapper = utils.make('ul', 'list-item-wrapper');

pasteData(
  JSON.parse(window.localStorage.getItem('listItems')),
  listItemsWrapper,
);

export default listItemsWrapper;
