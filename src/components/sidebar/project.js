import utils from '../utils';

const data = [];

let ul = utils.make('ul', 'project-container');

const li = utils.make('li', 'd-flex flex-column project-item');

const today = utils.make('a', '');
const tomorrow = utils.make();

const ul = utils.appendBulkChild(ul, [li]);

export default ul;
