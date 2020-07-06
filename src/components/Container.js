import make from './utils';
import nav from './header/header';

const container = make('div', 'container-fluid');

// nav
container.appendChild(nav);

export default container;
