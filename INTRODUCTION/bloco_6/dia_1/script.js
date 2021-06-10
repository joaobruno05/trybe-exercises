let selectState = document.getElementById('brazil-states');

function chooseBrazilState() {
  let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Parané', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
  for (let index = 0; index < states.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = states[index];
    selectState.appendChild(option);
  }
}
chooseBrazilState();

let date = document.getElementById('date');

function validateStartDate() {
  let validFormat = /^\d{2}[/]\d{2}[/]\d{4}$/;
  
  let day = parseInt(date.value.substring(0,2));
  let month = parseInt(date.value.substring(3,5));
  let year = parseInt(date.value.substring(6,10));

  if (date.value) {
    if (!validFormat.test(date.value)) {
      alert('A data está no formato errado. Digite uma data válida!!!');
    }
    if (day <= 0 || day > 31) {
      alert('Você digitou um dia inválido. Escolha outro!!!')
    }
    if (month <= 0 || month > 12) {
      alert('Você digitou um mês inválido. Escolha outro!!!')
    }
    if (year < 0) {
      alert('Você digitou um ano inválido. Escolha outro!!!')
    }
  }
}
validateStartDate();
