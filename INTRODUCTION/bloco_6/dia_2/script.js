// Colocando todos os estados brasileiros no select
let selectState = document.getElementById('brazil-states');

function chooseBrazilState() {
  let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Parané', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  for (let index = 0; index < states.length; index += 1) {
    let option = document.createElement('option');
    selectState.appendChild(option);
    option.innerText = states[index];
    option.value = states[index];

  };
}
chooseBrazilState();

let btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', (event) => {
  if ()
  event.preventDefault();
});

// Validando a data de início com a biblioteca pikaday
let picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});


new window.JustValidate('.js-form', {
  // options here
});

new window.JustValidate('.js-form', {
  Rules: {
    email: {
        required: true,
        email: true,
        maxLength: 50
    },
    name: {
        required: true,
        maxLength: 40
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    adress: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true
    },
    residence: {
      required: true
    },
    textarea: {
      required: true,
      maxLength: 1000
    },
    office: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required
    }
}
});
