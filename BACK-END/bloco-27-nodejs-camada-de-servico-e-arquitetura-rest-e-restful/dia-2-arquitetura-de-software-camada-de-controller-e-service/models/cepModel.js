const connectionMySQL = require('./connectionMySQL');

const getInfoByCEPdataBase = async (cep) => {
  const [query] = await connectionMySQL.execute('SELECT * FROM ceps WHERE cep = ?', [cep]);
  console.log(query);

  if (query.length === 0) throw { status: 404, error: { code: 'notFound', message: 'CEP não encontrado' } }

  return query;
};

const addInfoAdressDataBase = async (cep, logradouro, bairro, localidade, uf) => {
  const cepReplace = cep.replace('-', '');

  await connectionMySQL.execute('INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)', [cepReplace, logradouro, bairro, localidade, uf]);

  const resultInfo = {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };

  return resultInfo;
};

const findAdressByCep = async (cep) => {
  const cepReplace = cep.replace('-', '');

  const [query] = await connectionMySQL.execute('SELECT * FROM ceps WHERE cep = ?', [cepReplace]);

  return query;
};

module.exports = {
  getInfoByCEPdataBase,
  addInfoAdressDataBase,
  findAdressByCep,
};
