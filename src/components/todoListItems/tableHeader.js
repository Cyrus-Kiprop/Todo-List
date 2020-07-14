import utils from '../utils';
// import data from '../data';

const tableHeader = utils.make('div', 'table-header');
const headers = ['Title', 'Description', 'Due Date', 'Priority'];


headers.forEach((header) => {
  const th = utils.make('span', '');
  const headerText = document.createTextNode(header);
  th.appendChild(headerText);
  tableHeader.appendChild(th);
});

export default tableHeader;