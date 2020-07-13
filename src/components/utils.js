function Database(data = undefined) {
  this.data = data;
}

Database.prototype.setItems = function setItems(key) {
  return window.localStorage.setItem(key, JSON.stringify(this.data));
};
Database.prototype.getItems = function getItems(key) {
  return JSON.parse(window.localStorage.getItem(key));
};

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

  function strike(listItem, isChecked) {
    if (isChecked) {
      Array.from(listItem.childNodes)
        .slice(1, -2)
        .forEach((element) => {
          element.classList.add('strike-through');
        });
    } else {
      Array.from(listItem.childNodes)
        .slice(1, -2)
        .forEach((element) => {
          element.classList.remove('strike-through');
        });
    }
  }
  return {
    make,
    appendBulkChild,
    Database,

    strike,
  };
};
export default utils();
