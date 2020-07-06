const make = (type, classList, appendTo = null, options) => {
  const newEl = document.createElement(type);
  if (options) {
    const props = Object.keys(options);
    props.forEach((p) => {
      newEl.setAttribute(p, options[p]);
    });
  }
  newEl.classList = classList;
  if (appendTo) {
    appendTo.appendChild(newEl);
  }
  return newEl;
};
export default make;
