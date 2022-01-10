const { getInfoByCEPdataBase, addInfoAdressDataBase, findAdressByCep } = require('../models/cepModel');

const getInfoByCEPService = async (cep) => {
  const regexCEP = /\d{5}-?\d{3}/;

  if (cep.length > 8 || !regexCEP.test(cep)) throw { status: 400, error: { code: 'invalidData', message: 'CEP inválido' } };

  const getCEP = await getInfoByCEPdataBase(cep);

  return getCEP;
};

const addInfoAdressService = async (cep, logradouro, bairro, localidade, uf) => {
  if (!cep || !logradouro || !bairro || !localidade || !uf) throw { status: 400, error: { code: 'invalidData', message: 'Todos os campos são obrigatórios' } };

  const regexCEP = /\d{5}-\d{3}/;
  if (cep.length > 9 || !regexCEP.test(cep)) throw { status: 400, error: { code: 'invalidData', message: 'CEP inválido' } }

  const getInfoByCEP = await findAdressByCep(cep);

  if (getInfoByCEP.length !== 0) throw { status: 409, error: { code: 'alreadyExists', message: 'CEP já existente' } }

  const resultInfo = await addInfoAdressDataBase(cep, logradouro, bairro, localidade, uf);

  return resultInfo;
};

module.exports = {
  getInfoByCEPService,
  addInfoAdressService,
};
