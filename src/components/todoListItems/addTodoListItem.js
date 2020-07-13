import utils from '../utils';

const addListItem = (function addListItem() {
  const addBtn = () => {
    let addBtn = utils.make('div', 'add-btn ');
    const addIcon = utils.make('i', 'fa fa-plus');
    addBtn = utils.appendBulkChild(addBtn, [addIcon]);
    return addBtn;
  };

  const inputs = () => {
    let formWrapper = utils.make(
      'div',
      'list-input-wrapper card position-absolute '
    );

    let form = utils.make('form', '');

    const inputs = ['Title:', 'Description:', 'Due Date:', 'Priority:'];
    inputs.forEach((input) => {
      let inputItem = utils.make('div', 'form-group');
      let label = utils.make('label', '');
      label.appendChild(document.createTextNode(input));
      let inputEle = utils.make('input', 'form-control');
      if (input === 'Description:') {
        inputEle = utils.make(
          'textarea',
          'form-control w-100 description',
          undefined,
          {
            rows: 5,
            cols: 33,
            placeholder: 'Enter Description ...',
          }
        );
      }

      if (input === 'Priority:') {
        // inputItem = utils.make('div', 'form-group');
        // inputEle.classList.add('position-absolute');
        inputEle = utils.make('select', 'custom-select mb-2');
        [
          {
            level: 'High',
            value: 'High',
          },
          {
            level: 'Average',
            value: 'Average',
          },
          {
            level: 'Low',
            value: 'Low',
          },
        ].forEach(({ level, value }) => {
          const option = utils.make('option', '', inputEle, {
            value,
          });
          option.appendChild(document.createTextNode(level));
        });

      }
      inputItem = utils.appendBulkChild(inputItem, [label, inputEle]);
      form.appendChild(inputItem);
    });
    const submitBtn = utils.make('button', 'btn list-input-button');
    const submitIcon = utils.make('i', 'fa fa-lightbulb-o');
    submitBtn.appendChild(submitIcon);
    formWrapper = utils.appendBulkChild(formWrapper, [form, submitBtn]);

    return formWrapper;
  };

  let addListContainer = utils.make(
    'div',
    'add-list-wrapper position-relative'
  );
  addListContainer = utils.appendBulkChild(addListContainer, [
    addBtn(),
    inputs(),
  ]);

  return {
    addListContainer,
  };
})();

export default addListItem;
