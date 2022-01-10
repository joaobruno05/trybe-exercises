const connectionMySQL = require('./connectionMySQL');

const getInfoByCEPdataBase = async (cep) => {
  if (!cep) throw { status: 404, error: { code: 'notFound', message: 'CEP não encontrado' } };

  const [query] = await connectionMySQL.execute('SELECT * FROM ceps WHERE cep = ?', [cep]);

  return query;
};

module.exports = {
  getInfoByCEPdataBase,
};
