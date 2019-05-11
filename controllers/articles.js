const { selectArticles } = require('../models/articles');

exports.getArticles = async (req, res) => {
  const { order } = req.query;
  if (order && order !== 'asc' && order !== 'desc') {
    return Promise.reject({ status: 400, msg: 'Bad Request' });
  }
  const articles = await selectArticles(req.query);
  res.send({ articles });
};
