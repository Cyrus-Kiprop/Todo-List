import utils from '../utils';

let form = utils.make('form', 'form-inline d-none');

// input
const searchInput = utils.make('input', 'form-control mr-sm-2', undefined, {
  placeholder: 'Add Project Name..',
  aria_label: 'Search',
  type: 'Search',
});

const searchBtn = utils.make(
  'button',
  'btn btn-outline-success my-2 my-sm-0',
  undefined,
  {
    type: 'submit',
  }
);

const btnTextNode = document.createTextNode('Add');

searchBtn.appendChild(btnTextNode);

form = utils.appendBulkChild(form, [searchInput, searchBtn]);

export default form;
