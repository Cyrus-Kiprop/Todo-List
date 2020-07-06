import './assets/styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';


//  module importation
import container from './components/Container';

const todoList = document.getElementById('root');

todoList.appendChild(container);
