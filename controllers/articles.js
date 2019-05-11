const { selectArticles } = require('../models/articles');
const { checkUsername } = require('../models/users');

exports.getArticles = async (req, res) => {
  const { order, author } = req.query;
  if (order && order !== 'asc' && order !== 'desc') {
    return Promise.reject({ status: 400, msg: 'Bad Request' });
  }
  const articles = await selectArticles(req.query);
  if (!articles.length) {
    const authorExists = author ? await checkUsername(author) : true;
  }
  res.send({ articles });
};
