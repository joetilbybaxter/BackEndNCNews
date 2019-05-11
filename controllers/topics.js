const { selectTopics } = require('../models/topics');

exports.getTopics = async (req, res) => {
  const topics = await selectTopics();
  res.send({ topics });
};
