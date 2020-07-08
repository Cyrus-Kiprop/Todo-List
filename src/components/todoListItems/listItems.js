import utils from '../utils';
import data from '../data';
import pasteData from './listUtils';

const listItemsWrapper = utils.make('ul', 'list-item-wrapper');

pasteData(data.todoItems, listItemsWrapper);

export default listItemsWrapper;
