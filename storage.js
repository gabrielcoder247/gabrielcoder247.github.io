const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('comment');
const form = document.querySelector('form');

if (localStorage.getItem('user') !== null) {
  const objStore = JSON.parse(localStorage.getItem('user'));
  nameInput.value = objStore.username;
  emailInput.value = objStore.email;
  msgInput.value = objStore.msg;
}

form.addEventListener('input', () => {
  const obj = {
    username: nameInput.value,
    email: emailInput.value,
    msg: msgInput.value,
  };
  if (typeof (Storage) !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(obj));
  } else {
    document.getElementById('result').innerHTML = 'Sorry, your browser does not support Web Storage...';
  }
});