function handlers() {
  const handleDeleteItem = (event) => {
    const parent = event.target.parentNode.parentNode;
    const itemId = parent.getAttribute('data-id');
    console.log(JSON.parse(window.localStorage.getItem('listItems')));
    const oldData = JSON.parse(window.localStorage.getItem('listItems'));
    const newData = oldData.filter((item) => {
      console.log(itemId);
      return item.uuid.toString() !== itemId;
    });

    // window.localStorage.removeItem('listItems');
    window.localStorage.setItem('listItems', JSON.stringify(newData));

    parent.parentNode.removeChild(parent);
  };

  function toggleInputForm(current = undefined) {
    console.log(current);
    const inputForm = document.getElementsByClassName('list-input-wrapper')[0];
    inputForm.data = current.uuid || '';

    const description = document.getElementById('description');
    const due = document.getElementById('due-date');
    due.value = current.due;
    description.value = current.description || '';
    const title = document.getElementById('title');
    title.value = current.title || '';

    inputForm.classList.toggle('d-none');
  }

  const handleEdit = (event) => {
    const { target } = event;
    const parent = target.parentNode.parentNode;
    // console.log(parent.innerHTML)
    const data = JSON.parse(window.localStorage.getItem('listItems'));
    const current = data.filter((record) => {
      return (
        record.uuid.toString() === parent.getAttribute('data-id').toString()
      );
    });
    console.log(current);
    // Array.from(parent.childNodes)
    //   .slice(1, -2)
    //   .forEach((span) => {
    //     console.log(span.innerHTML);
    //   });
    toggleInputForm(current[0]);
  };

  return {
    handleDeleteItem,
    handleEdit,
    toggleInputForm,
  };
}

export default handlers();
