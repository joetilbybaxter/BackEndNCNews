const { topicData, userData, articleData } = require('../data');
const { convertTimestampToDate } = require('../../utils');

exports.seed = async knex => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  const topicsPromise = knex('topics').insert(topicData, '*');
  const usersPromise = knex('users').insert(userData, '*');
  await Promise.all([topicsPromise, usersPromise]);
  const formattedArticleData = articleData.map(convertTimestampToDate);
  const articleRows = await knex('articles').insert(formattedArticleData, '*');
  return articleRows;
};
