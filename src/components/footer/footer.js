import utils from '../utils';

const footer = utils.make('div', 'footer-wrapper container');

const footerItemWrapper = utils.make('div', 'row');
const footerItem1 = utils.make('div', 'col-xs-12 col-sm-6 footer-brand');
const f1 = utils.make('span', '');
f1.appendChild(document.createTextNode('Todo-List'));
footerItem1.appendChild(f1);

let footerItem2 = utils.make('div', 'col-xs-12 col-sm-6 social');
let socialItem1 = utils.make('div', 'social-item');
let socialItem2 = utils.make('div', 'social-item');

const follow = utils.make('h2');
follow.appendChild(document.createTextNode('Follow'));
const facebook = utils.make('a', 'footer-link ', undefined, { href: '#' });
facebook.appendChild(document.createTextNode('Facebook'));
const twitter = utils.make('a', 'footer-link ', undefined, { href: '#' });
twitter.appendChild(document.createTextNode('Twitter'));
const github = utils.make('a', 'footer-link ', undefined, { href: '#' });
github.appendChild(document.createTextNode('Github'));
const linkedin = utils.make('a', 'footer-link ', undefined, { href: '#' });
linkedin.appendChild(document.createTextNode('Linkedin'));

socialItem1 = utils.appendBulkChild(socialItem1, [
  follow,
  facebook,
  twitter,
  github,
  linkedin,
]);

footerItem2 = utils.appendBulkChild(footerItem2, [socialItem1]);

const editorial = utils.make('h2');
editorial.appendChild(document.createTextNode('Editorial'));
const magazine = utils.make('a', 'footer-link ', undefined, { href: '#' });
magazine.appendChild(document.createTextNode('Magazine'));
const contactUs = utils.make('a', 'footer-link ', undefined, { href: '#' });
contactUs.appendChild(document.createTextNode('Contact & Legal Notice'));
const privacy = utils.make('a', 'footer-link ', undefined, { href: '#' });
privacy.appendChild(document.createTextNode('Privacy'));

socialItem2 = utils.appendBulkChild(socialItem2, [
  editorial,
  magazine,
  contactUs,
  privacy,
]);

footerItem2 = utils.appendBulkChild(footerItem2, [socialItem2]);

footerItemWrapper.appendChild(footerItem1);
footerItemWrapper.appendChild(footerItem2);

footer.appendChild(footerItemWrapper);
export default footer;
