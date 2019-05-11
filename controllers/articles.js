const { selectArticles } = require('../models/articles');

exports.getArticles = async (req, res) => {
  const articles = await selectArticles();
  res.send({ articles });
};
