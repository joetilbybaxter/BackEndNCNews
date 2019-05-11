const { topicData, userData } = require('../data');

exports.seed = async knex => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  const topicsPromise = knex('topics').insert(topicData, '*');
  const usersPromise = knex('users').insert(userData, '*');
  return Promise.all([topicsPromise, usersPromise]);
};
