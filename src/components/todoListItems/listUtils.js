/* eslint-disable import/no-cycle */
import utils from '../utils';
import handlers from './handlers';

const pasteData = (data, parent) => {
  parent.innerHTML = '';
  if (data) {
    data.forEach((item) => {
      let listItem = utils.make('li', 'list-item');
      listItem.setAttribute('data-id', item.uuid);

      const isDone = utils.make('input', 'is-done', undefined, {
        type: 'checkbox',
        data: item.uuid,
      });

      if (item.complete === false) isDone.checked = false;
      if (item.complete === true) {
        isDone.checked = true;
        // const parent = isDone.parentNode;
      }

      isDone.addEventListener('click', handlers.isDone);
      const deleteBtn = utils.make('button', 'btn   action-btn');
      const editBtn = utils.make('button', 'btn  ml-auto action-btn');

      const deleteIcon = utils.make('i', 'fa fa-times-circle-o', deleteBtn);
      deleteIcon.addEventListener('click', handlers.handleDeleteItem);
      deleteIcon.setAttribute('aria-hidden', 'true');
      const editIcon = utils.make('i', 'fa fa-pencil', editBtn);
      editIcon.addEventListener('click', handlers.handleEdit);
      editIcon.setAttribute('aria-hidden', 'true');

      listItem = utils.appendBulkChild(listItem, [isDone]);

      ['title', 'description', 'due', 'priority'].forEach((key) => {
        const td = utils.make('span', '');
        td.setAttribute('data-complete', item.complete);
        td.appendChild(document.createTextNode(item[key]));
        if (key === 'due') td.classList.add('ml-auto');
        if (key === 'description') td.classList.add('w-60');
        if (key === 'title') td.classList.add('w-20');

        listItem.appendChild(td);
        listItem.setAttribute('data-id', item.uuid.toString());

        listItem = utils.appendBulkChild(listItem, [editBtn, deleteBtn]);
        parent.appendChild(listItem);
        if (item.complete) {
          utils.strike(listItem);
        }
      });
    });
  }
};

export default pasteData;
