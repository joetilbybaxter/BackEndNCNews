const connection = require('../db/connection');

exports.checkExists = async (table, column, query) => {
  if (!query) return true;
  const result = await connection(table)
    .select()
    .where({ [column]: query })
    .first();
  return result
    ? true
    : Promise.reject({ status: 404, msg: 'Username Not Found' });
};
