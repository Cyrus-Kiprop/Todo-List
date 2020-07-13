const messages = {
  empty: 'This field cannot be blank',
};

function validate(listNodes) {
  Array.from(listNodes).forEach((node) => {
    if (node.value === '') {
      console.log(messages.empty);
    }
  });
}

export default validate;
