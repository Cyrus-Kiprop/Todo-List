function handlers() {
  const handleDeleteItem = (event) => {
    const parent = event.target.parentNode.parentNode;
    const itemId = parent.getAttribute('data-id');

    const oldData = JSON.parse(window.localStorage.getItem('listItems'));
    const newData = oldData.filter((item) => {
      return item.uuid !== itemId;
    });

    console.log(newData);
    parent.parentNode.removeChild(parent);
  };

  return {
    handleDeleteItem,
  };
}

export default handlers();
