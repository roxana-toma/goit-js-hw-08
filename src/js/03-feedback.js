import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
populateForm();

form.addEventListener('input', throttle(onInput, 500));

form.addEventListener('submit', onSubmit);

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function populateForm() {
  if (formData.email) {
    form.elements.email.value = formData.email;
  }
  if (formData.message) {
    form.elements.message.value = formData.message;
  }
}
