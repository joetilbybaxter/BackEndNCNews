const { selectComments } = require('../models/comments');
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
