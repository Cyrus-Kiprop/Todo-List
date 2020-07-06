import make from '../utils';

const footer = make('div', 'footer-wrapper container');

const footerItemWrapper = make('div', 'row');
const footerItem1 = make('div', 'col-xs-12 col-sm-6 footer-brand');
const f1 = make('span', '');
f1.appendChild(document.createTextNode('Todo-List'));
footerItem1.appendChild(f1);

const footerItem2 = make('div', 'col-xs-12 col-sm-6 social');
const socialItem1 = make('div', 'social-item');
const socialItem2 = make('div', 'social-item');

const follow = make('h2');
follow.appendChild(document.createTextNode('Follow'));
const facebook = make('a', 'footer-link ', undefined, { href: '#' });
facebook.appendChild(document.createTextNode('Facebook'));
const twitter = make('a', 'footer-link ', undefined, { href: '#' });
twitter.appendChild(document.createTextNode('Twitter'));
const github = make('a', 'footer-link ', undefined, { href: '#' });
github.appendChild(document.createTextNode('Github'));
const linkedin = make('a', 'footer-link ', undefined, { href: '#' });
linkedin.appendChild(document.createTextNode('Linkedin'));
socialItem1.appendChild(follow);
socialItem1.appendChild(facebook);
socialItem1.appendChild(twitter);
socialItem1.appendChild(github);
socialItem1.appendChild(linkedin);
footerItem2.appendChild(socialItem1);

const editorial = make('h2');
editorial.appendChild(document.createTextNode('Editorial'));
const magazine = make('a', 'footer-link ', undefined, { href: '#' });
magazine.appendChild(document.createTextNode('Magazine'));
const contactUs = make('a', 'footer-link ', undefined, { href: '#' });
contactUs.appendChild(document.createTextNode('Contact & Legal Notice'));
const privacy = make('a', 'footer-link ', undefined, { href: '#' });
privacy.appendChild(document.createTextNode('Privacy'));
socialItem2.appendChild(editorial);
socialItem2.appendChild(magazine);
socialItem2.appendChild(contactUs);
socialItem2.appendChild(privacy);
footerItem2.appendChild(socialItem2);
// const footerItem3 = make('div', 'col-xs-12 col-sm-6 editorial');
// footerItem3.appendChild(document.createTextNode('Todo-List'));

footerItemWrapper.appendChild(footerItem1);
footerItemWrapper.appendChild(footerItem2);
// footerItemWrapper.appendChild(footerItem3);

footer.appendChild(footerItemWrapper);
export default footer;
