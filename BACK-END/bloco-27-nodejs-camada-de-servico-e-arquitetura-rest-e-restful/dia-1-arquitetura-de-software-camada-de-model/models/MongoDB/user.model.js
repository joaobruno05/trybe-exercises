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

    return users;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const getUserId = async (id) => {
  try {
    const connect = await connectionMongo();
    const user = await connect.collection('users').find({ id }).toArray();

    // const result = {
    //   id: user[0].id,
    //   firstName: user[0].first_name,
    //   lastName: user[0].last_name,
    //   email: user[0].email,
    // };
    console.log(user);

    // return result;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = {
  addUser,
  getUsers,
  getUserId,
};
