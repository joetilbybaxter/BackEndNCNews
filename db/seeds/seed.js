const { topicData } = require('../data');

exports.seed = async knex => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  return knex('topics').insert(topicData, '*');
};
