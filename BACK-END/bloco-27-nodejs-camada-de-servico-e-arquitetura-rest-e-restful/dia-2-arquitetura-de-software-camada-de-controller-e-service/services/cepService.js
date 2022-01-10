const { getInfoByCEPdataBase } = require('../models/cepModel');

const getInfoByCEPService = async (cep) => {
  const regexCEP = /\d{5}-?\d{3}/;

  if (cep.length !== 8 && !regexCEP.test(cep)) throw { status: 400, error: { code: 'invalidData', message: 'CEP inválido' } };

  const getCEP = await getInfoByCEPdataBase(cep);

  return getCEP;
};

module.exports = {
  getInfoByCEPService,
};
