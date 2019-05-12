const commentsRouter = require('express').Router();
const { patchCommentById } = require('../controllers/comments');
const { withErrorHandling, methodNotAllowed } = require('../errors');

commentsRouter
  .route('/:comment_id')
  .patch(withErrorHandling(patchCommentById))
  .all(methodNotAllowed);

module.exports = commentsRouter;
