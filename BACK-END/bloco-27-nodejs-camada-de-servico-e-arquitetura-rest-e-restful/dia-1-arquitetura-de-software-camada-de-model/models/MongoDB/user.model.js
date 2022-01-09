const { ObjectId } = require('mongodb');
const connectionMongo = require('./connectionMongo');

const addUser = async (firstName, lastName, email, password) => {
  try {
    const connect = await connectionMongo();
    const query = await connect.collection('users').insertOne({
      firstName,
      lastName,
      email,
      password,
    });

    return query.insertedId;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const getUsers = async () => {
  try {
    const connect = await connectionMongo();
    const users = await connect.collection('users').find().toArray();

    const usersMap = users.map(({
      _id, firstName, lastName, email,
    }) => ({
      id: _id,
      firstName,
      lastName,
      email,
    }));

    return usersMap;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const getUserId = async (id) => {
  try {
    const connect = await connectionMongo();

    if (!ObjectId.isValid(id)) return null;

    const user = await connect.collection('users').findOne({ _id: new ObjectId(id) });

    return user;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const updateUser = async (firstName, lastName, email, password) => {
  try {
    const connect = await connectionMongo();
    const newUser = await connect.collection('users').updateOne({
      $set: {
        firstName, lastName, email, password,
      },
    });

    return newUser;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = {
  addUser,
  getUsers,
  getUserId,
  updateUser,
};
