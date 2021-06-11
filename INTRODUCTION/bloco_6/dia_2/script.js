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
