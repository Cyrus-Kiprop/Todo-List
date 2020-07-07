import utils from '../utils';

const logo = utils.make('a', 'navbar navbar-light bg-light');

const imgLogo = utils.make('img', 'navbar-brand', undefined, {
  src: 'assets/images/todo-logo.png',
  alt: 'logo',
});

logo.appendChild(imgLogo);

export default logo;
