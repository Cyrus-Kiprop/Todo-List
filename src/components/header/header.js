import make from '../utils';
import logo from './navBrand';
import form from './search';

const nav = make('div', 'navbar navbar-light nav_bar');

nav.appendChild(logo);
nav.appendChild(form);

export default nav;
