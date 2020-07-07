import utils from '../utils';
import data from '../data';
import tableHeader from './tableHeader';

let listWrapper = utils.make('div','list-wrapper');
const listTitle = utils.make('h1', 'list-title');
const titleText = document.createTextNode('All');
listTitle.appendChild(titleText);




listWrapper=utils.appendBulkChild(listWrapper,[listTitle,tableHeader]);

export default listWrapper;   