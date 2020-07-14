import './assets/styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

import initialize from './components/data';
import container from './components/Container';

initialize();

const todoList = document.getElementById('root');

todoList.appendChild(container);
