const articlesRouter = require('express').Router();
const { getArticles, getArticleById } = require('../controllers/articles');
const { withErrorHandling, methodNotAllowed } = require('../errors');

articlesRouter
  .route('/')
  .get(withErrorHandling(getArticles))
  .all(methodNotAllowed);

articlesRouter
  .route('/:article_id')
  .get(withErrorHandling(getArticleById))
  .all(methodNotAllowed);

module.exports = articlesRouter;
