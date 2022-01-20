const { getInfoByCEPService, addInfoAdressService } = require('../services/cepService');

const getPing = (_req, res) => res.status(200).json({ message: 'pong!' });

const getInfoByCEP = async (req, res, next) => {
  try {
    const { cep } = req.params;

    const infoByCEP = await getInfoByCEPService(cep);
    return res.status(200).json(infoByCEP);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const addInfoAdress = async (req, res, next) => {
  try {
    const {
      cep, logradouro, bairro, localidade, uf,
    } = req.body;
    const userName = req.user;

    const createInfoAdress = await addInfoAdressService(cep, logradouro, bairro, localidade, uf);

    return res.status(201).json({ ...createInfoAdress, userName });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  getPing,
  getInfoByCEP,
  addInfoAdress,
};
