import utils from '../utils';
import listItemsWrapper from './listItems';

const listWrapper = utils.make('div', 'list-wrapper');
const listTitle = utils.make('h1', 'list-title');
const titleText = document.createTextNode('All');
listTitle.appendChild(titleText);

utils.appendBulkChild(listWrapper, [
  listTitle,
  // tableHeader,
  listItemsWrapper,
]);

export default listWrapper;
