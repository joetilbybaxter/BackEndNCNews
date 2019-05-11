const connection = require('../db/connection');

exports.checkUsername = async username => {
  const user = await connection('users')
    .select()
    .where({ username })
    .first();
  if (!user) return Promise.reject({ status: 404, msg: 'Username Not Found' });
};
