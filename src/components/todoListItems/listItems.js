import utils from '../utils';
import data from '../data';

const listItemsWrapper = utils.make('div', 'list-item-wrapper');
const listItem = utils.make('div', 'list-item');
data.todoItems.forEach((item) => {
  ['title', 'description', 'due', 'priority'].forEach((key) => {
    const td = utils.make('span', '');
    td.setAttribute('data-complete', item.complete);
    td.appendChild(document.createTextNode(item[key]));
    listItem.appendChild(td);
  });
});

listItemsWrapper.appendChild(listItem);
export default listItemsWrapper;
