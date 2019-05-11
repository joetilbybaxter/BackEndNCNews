const connection = require('../db/connection');
const { checkExists } = require('./utils');

exports.selectArticles = async ({ sort_by, order, author, topic }) => {
  const articles = await connection
    .select('articles.*')
    .count({ comment_count: 'comment_id' })
    .from('articles')
    .orderBy(sort_by || 'created_at', order || 'desc')
    .modify(query => {
      if (author) query.where({ 'articles.author': author });
      if (topic) query.where({ 'articles.topic': topic });
    })
    .leftJoin('comments', 'comments.belongs_to', 'articles.article_id')
    .groupBy('article_id');

  if (!articles.length) {
    await checkExists('users', 'username', author);
    await checkExists('topics', 'slug', topic);
  }
  return articles;
};

exports.selectArticleById = async article_id => {
  const article = await connection
    .select('articles.*')
    .count({ comment_count: 'comment_id' })
    .from('articles')
    .leftJoin('comments', 'comments.belongs_to', 'articles.article_id')
    .groupBy('article_id')
    .first();
  return article;
};
