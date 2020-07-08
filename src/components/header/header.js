import utils from '../utils';
import logo from './navBrand';
import form from './search';
import addProject from './addProject';

let nav = utils.make('div', 'navbar navbar-light nav_bar');

nav = utils.appendBulkChild(nav, [logo,addProject,form]);

export default nav;
