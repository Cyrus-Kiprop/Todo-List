import utils from './utils';
import nav from './header/header';
import asideContainer from './sidebar/aside';
import footer from './footer/footer';

let container = utils.make('div', 'container-fluid');

// nav
// container = utils.appendBulkChild(container, [nav]);

// body content
let contentWrapper = utils.make('div', 'content-wrapper');

// left section of the main content
const aside = utils.make('aside', 'left-aside');
aside.appendChild(asideContainer);

// right section of th main section
const main = utils.make('main', 'body-content');

main.appendChild(nav);

contentWrapper = utils.appendBulkChild(contentWrapper, [aside, main]);

container = utils.appendBulkChild(container, [contentWrapper, footer]);

export default container;
