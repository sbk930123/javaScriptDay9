let sendButton = document.getElementById("send");
let resetButton = document.getElementById("reset");
let form = document.getElementById("form");
let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let messageInput = document.querySelector('#message')


let list = {
  이름: ' ',
  이메일: ' ',
  메세지: ' '
};

console.log(list);

form.addEventListener('submit', function(e) {
  e.preventDefault();
})

function deleteList() {
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

function sumitList() {
  list.이름 = nameInput.value;
  list.이메일 = emailInput.value;
  list.메세지 = messageInput.value;

  const timestamp = Date.now();
  const keyName = `이름(id : ${timestamp})`;
  const keyEmail = `이메일(id : ${timestamp})`;
  const keyMessage = `메세지(id : ${timestamp})`;
  const keyLine = `절취선(id : ${timestamp})`;

  localStorage.setItem(keyLine, '----------------information-----------------');
  localStorage.setItem(keyName, JSON.stringify(list.이름));
  localStorage.setItem(keyEmail, JSON.stringify(list.이메일));
  localStorage.setItem(keyMessage, JSON.stringify(list.메세지));

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

console.log(list);

resetButton.addEventListener('click', deleteList);
sendButton.addEventListener('click', sumitList);
