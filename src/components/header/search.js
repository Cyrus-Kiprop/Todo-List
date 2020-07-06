import make from '../utils';

const form = make('form', 'form-inline');

// input
const searchInput = make('input', 'form-control mr-sm-2', undefined, {
  placeholder: 'Search...',
  aria_label: 'Search',
  type: 'Search',
});

const searchBtn = make(
  'button',
  'btn btn-outline-success my-2 my-sm-0',
  undefined,
  {
    type: 'submit',
  }
);

const btnTextNode = document.createTextNode('Add');

searchBtn.appendChild(btnTextNode);
form.appendChild(searchInput);
form.appendChild(searchBtn);

export default form;
