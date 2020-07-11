import utils from '../utils';
import handlers from './handlers';

const isDone = (event) => {
  const { target } = event;
};

const pasteData = (data, parent) => {
  parent.innerHTML = '';
  console.log(parent);
  if (data) {
    data.forEach((item) => {
      let listItem = utils.make('li', 'list-item');

      const isDone = utils.make('input', 'is-done', undefined, {
        type: 'checkbox',
      });
      const deleteBtn = utils.make(
        'button',
        'btn btn-outline-danger  action-btn'
      );
      const editBtn = utils.make(
        'button',
        'btn btn-outline-success ml-auto action-btn'
      );

      const deleteIcon = utils.make('i', 'fa fa-times-circle-o', deleteBtn);
      deleteIcon.addEventListener('click', handlers.handleDeleteItem);
      deleteIcon.setAttribute('aria-hidden', 'true');
      const editIcon = utils.make('i', 'fa fa-pencil', editBtn);
      editIcon.setAttribute('aria-hidden', 'true');

      listItem = utils.appendBulkChild(listItem, [isDone]);

      ['title', 'description', 'due', 'priority'].forEach((key) => {
        const td = utils.make('span', '');
        td.setAttribute('data-complete', item.complete);
        td.appendChild(document.createTextNode(item[key]));

        listItem.appendChild(td);
        listItem.setAttribute('data-id', item.uuid);
        listItem = utils.appendBulkChild(listItem, [editBtn, deleteBtn]);
        parent.appendChild(listItem);
      });
    });
  } else {
    console.log('NO Itmes in the listfed');
  }
};

export default pasteData;
