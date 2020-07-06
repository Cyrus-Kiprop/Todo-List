import make from './utils';
import nav from './header/header';
import footer from './footer/footer';
const container = make('div', 'container-fluid');

// nav
container.appendChild(nav);
// footer
container.appendChild(footer);

export default container;
