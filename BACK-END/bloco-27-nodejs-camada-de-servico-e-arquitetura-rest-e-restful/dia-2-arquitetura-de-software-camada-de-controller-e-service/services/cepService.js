const Joi = require('joi');
const {
  getInfoByCEPdataBase, addInfoAdressDataBase, findAdressByCep,
} = require('../models/cepModel');

const getInfoByCEPService = async (cep) => {
  const regexCEP = /\d{5}-?\d{3}/;

  const schema = Joi.object({
    cep: Joi.string()
      .min(8)
      .regex(regexCEP),
  });

  const { error } = schema.validate({ cep });

  if (error) throw { status: 400, error: { code: 'invalidData', message: error.message } };

  const getCEP = await getInfoByCEPdataBase(cep);

  return getCEP;
};

const addInfoAdressService = async (cep, logradouro, bairro, localidade, uf) => {
  const regexCEP = /\d{5}-\d{3}/;

  const schema = Joi.object({
    cep: Joi.string()
      .regex(regexCEP)
      .not()
      .empty()
      .required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  });

  const { error } = schema.validate({
    cep, logradouro, bairro, localidade, uf,
  });

  if (error) throw { status: 400, error: { code: 'invalidData', message: error.message } };

  const getInfoByCEP = await findAdressByCep(cep);

  if (getInfoByCEP.length !== 0) throw { status: 409, error: { code: 'alreadyExists', message: 'CEP já existente' } };

  const resultInfo = await addInfoAdressDataBase(cep, logradouro, bairro, localidade, uf);

  return resultInfo;
};

module.exports = {
  getInfoByCEPService,
  addInfoAdressService,
};
