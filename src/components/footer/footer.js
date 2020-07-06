import make from '../utils';

const footer = make('div', 'footer-wrapper container');

const footerItemWrapper = make('div', 'row');
const footerItem1 = make('div', 'col-xs-12 col-sm-6 footer-brand');
const f1 = make('span', '');
f1.appendChild(document.createTextNode('Todo-List'));
footerItem1.appendChild(f1);

const footerItem2 = make('div', 'col-xs-12 col-sm-6 social');
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
footerItem2.appendChild(follow);
footerItem2.appendChild(facebook);
footerItem2.appendChild(twitter);
footerItem2.appendChild(github);
footerItem2.appendChild(linkedin);

// const footerItem3 = make('div', 'col-xs-12 col-sm-6 editorial');
// footerItem3.appendChild(document.createTextNode('Todo-List'));

footerItemWrapper.appendChild(footerItem1);
footerItemWrapper.appendChild(footerItem2);
// footerItemWrapper.appendChild(footerItem3);

footer.appendChild(footerItemWrapper);
export default footer;
