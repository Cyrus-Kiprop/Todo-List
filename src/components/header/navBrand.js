import utils from '../utils';

const logo = utils.make('a', 'navbar navbar-light bg-light');

const imgLogo = utils.make('img', 'navbar-brand', undefined, {
  src:
    'https://icons-for-free.com/iconfiles/png/512/checklist+documents+marks+todo+icon-1320184207350021670.png',
  alt: 'logo',
  height: '50px',
});

logo.appendChild(imgLogo);

export default logo;
