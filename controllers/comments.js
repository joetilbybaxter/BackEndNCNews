const { selectComments, insertComment } = require('../models/comments');
const { checkOrderQuery } = require('./utils');

exports.getComments = async (req, res) => {
  const { order } = req.query;
  if (!checkOrderQuery(order)) {
    return Promise.reject({
      status: 400,
      msg: 'Bad Request: Invalid order query',
    });
  }
  const comments = await selectComments({ ...req.params, ...req.query });
  res.send({ comments });
};

exports.postComment = async (req, res) => {
  const { article_id: belongs_to } = req.params;
  const { username: author, body } = req.body;
  const comment = await insertComment({ belongs_to, author, body });
  res.status(201).send({ comment });
};
