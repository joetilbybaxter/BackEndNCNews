const articlesRouter = require('express').Router();
const { getArticles } = require('../controllers/articles');
const { withErrorHandling, methodNotAllowed } = require('../errors');

articlesRouter
  .route('/')
  .get(withErrorHandling(getArticles))
  .all(methodNotAllowed);

module.exports = articlesRouter;
