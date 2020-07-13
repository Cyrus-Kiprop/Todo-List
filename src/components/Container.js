import utils from './utils';
import nav from './header/header';
import asideContainer from './sidebar/aside';
import footer from './footer/footer';
import listWrapper from './todoListItems/todoListItems';
import addListItem from './todoListItems/addTodoListItem';

let container = utils.make('div', 'container-fluid');

// nav
// container = utils.appendBulkChild(container, [nav]);

// body content
let contentWrapper = utils.make('div', 'content-wrapper');
// contentWrapper.appendChild(listWrapper);

// left section of the main content
const aside = utils.make('aside', 'left-aside');
aside.appendChild(asideContainer);

// right section of th main section
let main = utils.make('main', 'body-content');

// main.appendChild(nav);
main = utils.appendBulkChild(main, [nav, listWrapper]);
contentWrapper = utils.appendBulkChild(contentWrapper, [aside, main]);

container = utils.appendBulkChild(container, [
  contentWrapper,
  addListItem.addListContainer,
  footer,
]);

export default container;
