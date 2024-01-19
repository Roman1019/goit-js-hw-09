const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const textarea = form.elements.message;
const email = form.elements.email;

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormInput(event) {
  const formImput = {};
  formImput.email = event.currentTarget.elements.email.value.trim();
  formImput.text = event.currentTarget.elements.message.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formImput));
}

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const text = event.currentTarget.elements.message.value.trim();
  if (email === '' || text === '') {
    alert('Please fill in all the fields!');
    return;
  } else {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);

    event.currentTarget.reset();
  }
}

function savedText() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    textarea.value = savedMessage.textarea || '';
    email.value = savedMessage.email || '';
  }
}
savedText();
