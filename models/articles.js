const connection = require('../db/connection');

exports.selectArticles = () => {
  return connection.select().from('articles');
};
