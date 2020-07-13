function handlers() {
  const handleDeleteItem = (event) => {
    const parent = event.target.parentNode.parentNode;
    const itemId = parent.getAttribute('data-id');
    console.log(JSON.parse(window.localStorage.getItem('listItems')));
    const oldData = JSON.parse(window.localStorage.getItem('listItems'));
    const newData = oldData.filter((item) => {
      console.log(itemId);
      return item.uuid !== Number(itemId);
    });

    // window.localStorage.removeItem('listItems');
    window.localStorage.setItem('listItems', JSON.stringify(newData));

    console.log(newData);
    parent.parentNode.removeChild(parent);
  };

  return {
    handleDeleteItem,
  };
}

export default handlers();
