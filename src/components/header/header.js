import utils from '../utils';
import logo from './navBrand';
import form from './search';

let nav = utils.make('div', 'navbar navbar-light nav_bar');

nav = utils.appendBulkChild(nav, [logo, form]);

export default nav;
