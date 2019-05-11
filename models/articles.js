const connection = require('../db/connection');

exports.selectArticles = () => {
  return connection
    .select()
    .from('articles')
    .orderBy('created_at', 'desc');
};
