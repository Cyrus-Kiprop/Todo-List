import make from '../utils';

const logo = make('a', 'navbar navbar-light bg-light');

const imgLogo = make('img', 'navbar-brand', undefined, {
  src: 'assets/images/todo-logo.png',
  alt: 'logo',
});

logo.appendChild(imgLogo);

export default logo;
