const connection = require('../db/connection');
const { checkExists } = require('./utils');

exports.selectArticles = async ({ sort_by, order, author, topic }) => {
  const articles = await connection
    .select()
    .from('articles')
    .orderBy(sort_by || 'created_at', order || 'desc')
    .modify(query => {
      if (author) query.where({ 'articles.author': author });
      if (topic) query.where({ 'articles.topic': topic });
    });
  if (!articles.length) {
    await checkExists('users', 'username', author);
    await checkExists('topics', 'slug', topic);
  }
  return articles;
};
