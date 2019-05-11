const connection = require('../db/connection');

exports.selectArticles = ({ sort_by, order, author }) => {
  return connection
    .select()
    .from('articles')
    .orderBy(sort_by || 'created_at', order || 'desc')
    .modify(query => {
      if (author) query.where({ 'articles.author': author });
    });
};
