// Fazendo o dropdown dos estados brasileiros
let selectState = document.getElementById('brazil-states');

function chooseBrazilState() {
  let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Parané', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  for (let index = 0; index < states.length; index += 1) {
    let option = document.createElement('option');
    selectState.appendChild(option);
    option.innerText = states[index];
    option.value = states[index];

  }
}
chooseBrazilState();

// Validando a data de início
let date = document.getElementById('date');
const buttonSubmit = document.getElementById('btn-submit');

function validateStartDate() {
  let validFormat = /^\d{2}[/]\d{2}[/]\d{4}$/;
  
  let day = parseInt(date.value.substring(0,2));
  let month = parseInt(date.value.substring(3,5));
  let year = parseInt(date.value.substring(6,10));

  buttonSubmit.addEventListener('click', () => {
    if (date.value) {
      if (!validFormat.test(date.value)) {
        alert('A data está no formato errado. Digite uma data válida!!!');
        date.value = '';
      }
      if (day <= 0 || day > 31) {
        alert('Você digitou um dia inválido. Escolha outro!!!');
        //date.value = '';
      }
      if (month <= 0 || month > 12) {
        alert('Você digitou um mês inválido. Escolha outro!!!');
        //date.value;
      }
      if (year < 0) {
        alert('Você digitou um ano inválido. Escolha outro!!!');
        //date.value;
      }
    }
  });
}
validateStartDate();

// Utilizando o preventDefault() para implementar as validações do formulário
const formPartOne = document.getElementById('form-part-one');
const labelFullName = document.getElementById('label-fullname');
const fullName = document.getElementById('full-name');
let errorMensageFullName = document.createElement('div');

const userEmail = document.getElementById('user-email');

function validForm() {
  fullName.addEventListener('keypress', (event) => {
    if (fullName.value.length > 40) {
      event.preventDefault(fullName);
      //alert('Você ultrapassou o limite de 40 caracteres!');
      //let errorMensageFullName = document.createElement('div');
      errorMensageFullName.className = 'error-fullname'
      errorMensageFullName.innerText = '* Ultrapassou 40 caracteres!';
      fullName.style.borderColor = 'red';
      labelFullName.appendChild(errorMensageFullName);
    } else {
      errorMensageFullName.remove();
      fullName.style.borderColor = '';
    } 
  });

  userEmail.addEventListener('keypress', (event) => {
    if (userEmail.value.length > 50) {
      event.preventDefault();
      alert('Você ultrapassou o limite de 50 caracteres!')
    }
  })
}
validForm();