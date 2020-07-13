import { v4 as uuidv4 } from 'uuid';
import utils from '../utils';
import pasteData from './listUtils';
import handlers from './handlers';

const handler = {
  handleSubmit(event) {
    // get inputs from the user

    const inputForm = document.getElementsByClassName('list-input-wrapper')[0];
    console.log(inputForm.data);

    if (event.target.data) console.log(event.target.data);
    const userInput = {
      title: '',
      priority: '',
      due: Date.now(),
      complete: false,
      project: '',
      description: '',
      uuid: uuidv4(),
    };

    const ids = ['title', 'description', 'due-date', 'priority', 'project'];

    ids.forEach((id) => {
      console.log(id);
      if (id === 'title') userInput.title = document.getElementById(id).value;
      if (id === 'project')
        userInput.project = document.getElementById(id).value;
      if (id === 'priority')
        userInput.priority = document.getElementById(id).value;
      if (id === 'due-date') userInput.due = document.getElementById(id).value;
      if (id === 'description')
        userInput.description = document.getElementById(id).value;
    });

    let DB = JSON.parse(window.localStorage.getItem('listItems'));

    if (inputForm.data && inputForm.data !== '') {
      userInput.uuid = inputForm.data;
      const newDB = DB.filter((item) => {
        console.log(true);
        return item.uuid.toString() !== inputForm.data.toString();
      });
      console.log(newDB);
      newDB.push(userInput);
      DB = newDB;
    } else {
      DB.push(userInput);
    }

    window.localStorage.setItem('listItems', JSON.stringify(DB));
    pasteData(DB, document.getElementsByClassName('list-item-wrapper')[0]);
    inputForm.data = '';
    document
      .getElementsByClassName('list-input-wrapper')[0]
      .classList.toggle('d-none');
    console.log(userInput);
  },
};

const addListItem = function addListItem() {
  const addBtn = () => {
    let addBtn = utils.make('div', 'add-btn ');
    const addIcon = utils.make('i', 'fa fa-plus');
    addBtn = utils.appendBulkChild(addBtn, [addIcon]);
    addBtn.addEventListener('click', handlers.toggleInputForm);
    return addBtn;
  };

  const inputs = () => {
    let formWrapper = utils.make(
      'div',
      'list-input-wrapper d-none card position-absolute'
    );

    const form = utils.make('form', '');
    form.addEventListener('submit', handler.handleSubmit);

    const inputs = [
      'Project:',
      'Title:',
      'Description:',
      'Due-Date:',
      'Priority:',
    ];
    inputs.forEach((input) => {
      let inputItem = utils.make('div', 'form-group');
      const label = utils.make('label', '');
      label.appendChild(document.createTextNode(input));
      let inputEle = utils.make('input', 'form-control');
      inputEle.setAttribute('id', input.slice(0, -1).toLocaleLowerCase());
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
        inputEle.setAttribute('id', 'description');
      }

      if (input === 'Due-Date:') inputEle.setAttribute('type', 'date');

      if (input === 'Project:') {
        const projects = JSON.parse(window.localStorage.getItem('projects'));
        inputEle = utils.make('select', 'custom-select mb-2');
        projects.forEach((project) => {
          const option = utils.make('option', '', inputEle, {
            project,
          });
          option.appendChild(document.createTextNode(project));
        });
        inputEle.setAttribute('id', 'project');
      }

      if (input === 'Priority:') {
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
        inputEle.setAttribute('id', 'priority');
      }
      inputItem = utils.appendBulkChild(inputItem, [label, inputEle]);
      form.appendChild(inputItem);
    });
    const submitBtn = utils.make('button', 'btn list-input-button', undefined, {
      type: 'submit',
    });
    submitBtn.addEventListener('click', (event) => handler.handleSubmit(event));
    const submitIcon = utils.make('i', 'fa fa-lightbulb-o');
    submitBtn.appendChild(submitIcon);
    formWrapper = utils.appendBulkChild(formWrapper, [form, submitBtn]);

    return formWrapper;
  };

  let addListContainer = utils.make('div', 'add-list-wrapper');
  addListContainer = utils.appendBulkChild(addListContainer, [
    addBtn(),
    inputs(),
  ]);

  return {
    addListContainer,
  };
};

export default addListItem();
