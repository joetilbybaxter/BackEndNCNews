const { selectArticles } = require('../models/articles');

exports.getArticles = async (req, res) => {
  const articles = await selectArticles(req.query);
  res.send({ articles });
};
