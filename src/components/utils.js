const utils = function utils() {
  const appendBulkChild = (parent, children) => {
    children.forEach((child) => parent.appendChild(child));
    return parent;
  };

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

  return {
    make,
    appendBulkChild,
  };
};
export default utils();
